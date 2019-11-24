import { call, put, takeLatest } from "redux-saga/effects";

import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  EMAIL_VERIFY_REQUEST,
  PROFILE_UPDATE_REQUEST,
  PROFILE_GET_REQUEST,
  PASSWORD_CHANGE_REQUEST,
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_CONFIRM_REQUEST,
  CHECK_AUTHORIZATION,
  AUTH_TOKEN_EXPIRED,
  PROFILE_PARTIAL_UPDATE_REQUEST
} from "../constants/auth";
import {
  loginSuccess,
  loginFail,
  logoutSuccess,
  logoutFail,
  registerSuccess,
  registerFail,
  emailVerifySuccess,
  emailVerifyFail,
  profileUpdateSuccess,
  profileUpdateFail,
  profileGetSuccess,
  profileGetFail,
  passwordChangeSuccess,
  passwordChangeFail,
  passwordResetSuccess,
  passwordResetFail,
  passwordResetConfirmSuccess,
  passwordResetConfirmFail
} from "../actions/auth";

import {
  getHeaders,
  setAuthTokenHeader,
  checkExpirity,
  clearToken
} from "../utils/authHelper";
import axios from "axios";
import { enqueueSnackbar } from "../actions/snackbar";

axios.defaults.baseURL = "https://cubahaus-api.herokuapp.com/";

export function* checkAuthorizationHandler() {
  const result = checkExpirity();
  if (result.error) {
    clearToken();
    yield put({ type: AUTH_TOKEN_EXPIRED });
  } else {
    yield put({ type: PROFILE_GET_REQUEST });
  }
}

export function* loginRequestHandler({ payload }) {
  const params = {
    url: "/accounts/login/",
    method: "post",
    data: payload
  };
  try {
    const res = yield call(axios.request, params);
    // yield call(localStorage.setItem, 'auth', JSON.stringify(res.data))
    localStorage.setItem("ch-username", res.data.user.username);
    localStorage.setItem("ch-userToken", res.data.token);
    setAuthTokenHeader(res.data.token);
    yield put(loginSuccess(res.data));
    yield put(
      enqueueSnackbar({
        message: "Login Success",
        options: { variant: "success" }
      })
    );
  } catch (err) {
    yield put(loginFail("Invalid Username or Password"));
  }
}

export function* logoutRequestHandler({ payload }) {
  const params = {
    url: "/accounts/logout/",
    method: "post"
  };

  try {
    const res = yield call(axios.request, params);
    localStorage.clear();
    yield put(logoutSuccess(res));
    yield put(
      enqueueSnackbar({
        message: "Logout Success",
        options: { variant: "success" }
      })
    );
  } catch (err) {
    yield put(logoutFail(payload));
  }
}

export function* registerRequestHandler({ payload }) {
  const params = {
    url: "/accounts/registration/",
    method: "post",
    data: payload
  };

  try {
    const res = yield call(axios.request, params);
    yield put(registerSuccess(res));
    // yield put(loginRequest(payload))
    yield put(
      enqueueSnackbar({
        message: "We send verify Code.",
        options: { variant: "success" }
      })
    );
  } catch (err) {
    yield put(registerFail(err.response.data));
  }
}

export function* emailVerifyRequestHandler({ payload }) {
  const params = {
    url: "/accounts/registration/verify-email",
    method: "post",
    data: payload
  };

  try {
    const res = yield call(axios.request, params);
    yield put(emailVerifySuccess(res));
  } catch (err) {
    yield put(emailVerifyFail(payload));
  }
}

export function* profileGetRequestHandler() {
  const { Authorization } = getHeaders();
  if (!Authorization) {
    return;
  }
  const params = {
    url: "/accounts/user/",
    method: "get",
    headers: getHeaders()
  };

  try {
    const res = yield call(axios.request, params);
    yield put(profileGetSuccess(res.data));
  } catch (err) {
    yield put(profileGetFail(err.response));
  }
}

export function* updateProfileRequestHandler({ payload }) {
  const params = {
    url: "/accounts/user/",
    method: "put",
    data: payload,
    headers: getHeaders()
  };

  try {
    const res = yield call(axios.request, params);
    yield put(profileUpdateSuccess(res.data));
    yield put(
      enqueueSnackbar({
        message: "Update Success",
        options: { variant: "success" }
      })
    );
  } catch (err) {
    yield put(profileUpdateFail(err.response));
  }
}

export function* updatePartialProfileRequestHandler({ payload }) {
  const params = {
    url: "/accounts/user/",
    method: "patch",
    data: payload,
    headers: getHeaders()
  };

  try {
    const res = yield call(axios.request, params);
    yield put(profileUpdateSuccess(res.data));
    yield put(
      enqueueSnackbar({
        message: "Update Success",
        options: { variant: "success" }
      })
    );
  } catch (err) {
    yield put(profileUpdateFail(err.response));
  }
}

export function* changePasswordRequestHandler({ payload }) {
  const params = {
    url: "/accounts/password/change/",
    method: "post",
    data: payload,
    headers: getHeaders()
  };

  try {
    const res = yield call(axios.request, params);
    yield put(passwordChangeSuccess(res.data));
    yield put(
      enqueueSnackbar({
        message: "Change Password Success",
        options: { variant: "success" }
      })
    );
  } catch (err) {
    yield put(passwordChangeFail(err.response));
    yield put(
      enqueueSnackbar({
        message: "Change Password Failed",
        options: { variant: "error" }
      })
    );
  }
}

export function* resetPasswordRequestHandler({ payload }) {
  const params = {
    url: "/accounts/password/reset/",
    method: "post",
    data: payload,
    headers: getHeaders()
  };

  try {
    const res = yield call(axios.request, params);
    yield put(passwordResetSuccess(res.data));
    yield put(
      enqueueSnackbar({
        message: "Request Reset Password Success",
        options: { variant: "success" }
      })
    );
  } catch (err) {
    yield put(passwordResetFail(err.response));
    yield put(
      enqueueSnackbar({
        message: "Request Reset Password Failed",
        options: { variant: "error" }
      })
    );
  }
}

export function* resetPasswordConfirmRequestHandler({ payload }) {
  const params = {
    url: "/accounts/password/reset/confirm/",
    method: "post",
    data: payload,
    headers: getHeaders()
  };

  try {
    const res = yield call(axios.request, params);
    yield put(passwordResetConfirmSuccess(res.data));
    yield put(
      enqueueSnackbar({
        message: "Reset Password Success",
        options: { variant: "success" }
      })
    );
  } catch (err) {
    yield put(passwordResetConfirmFail(err.response));
    yield put(
      enqueueSnackbar({
        message: "Reset Password Failed",
        options: { variant: "error" }
      })
    );
  }
}

export default function* authSaga() {
  yield takeLatest(CHECK_AUTHORIZATION, checkAuthorizationHandler);
  yield takeLatest(LOGIN_REQUEST, loginRequestHandler);
  yield takeLatest(LOGOUT_REQUEST, logoutRequestHandler);
  yield takeLatest(REGISTER_REQUEST, registerRequestHandler);
  yield takeLatest(EMAIL_VERIFY_REQUEST, emailVerifyRequestHandler);
  yield takeLatest(PROFILE_GET_REQUEST, profileGetRequestHandler);
  yield takeLatest(PROFILE_UPDATE_REQUEST, updateProfileRequestHandler);
  yield takeLatest(
    PROFILE_PARTIAL_UPDATE_REQUEST,
    updatePartialProfileRequestHandler
  );
  yield takeLatest(PASSWORD_CHANGE_REQUEST, changePasswordRequestHandler);
  yield takeLatest(PASSWORD_RESET_REQUEST, resetPasswordRequestHandler);
  yield takeLatest(
    PASSWORD_RESET_CONFIRM_REQUEST,
    resetPasswordConfirmRequestHandler
  );
}
