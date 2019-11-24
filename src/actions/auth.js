import * as types from "../constants/auth";

export function checkAuthorization() {
  return {
    type: types.CHECK_AUTHORIZATION
  };
}

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload
  };
}

export function loginFail(payload) {
  return {
    type: types.LOGIN_FAIL,
    payload
  };
}

export function logoutRequest() {
  return {
    type: types.LOGOUT_REQUEST
  };
}

export function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS
  };
}

export function logoutFail(payload) {
  return {
    type: types.LOGOUT_FAIL,
    payload
  };
}

export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload
  };
}

export function registerSuccess(payload) {
  return {
    type: types.REGISTER_SUCCESS,
    payload
  };
}

export function emailVerifyRequest(payload) {
  return {
    type: types.EMAIL_VERIFY_REQUEST,
    payload
  };
}

export function emailVerifySuccess(payload) {
  return {
    type: types.EMAIL_VERIFY_SUCCESS,
    payload
  };
}

export function emailVerifyFail(payload) {
  return {
    type: types.EMAIL_VERIFY_FAIL,
    payload
  };
}

export function registerFail(payload) {
  return {
    type: types.REGISTER_FAIL,
    payload
  };
}

export function profileGetRequest() {
  return {
    type: types.PROFILE_GET_REQUEST
  };
}

export function profileGetSuccess(payload) {
  return {
    type: types.PROFILE_GET_SUCCESS,
    payload
  };
}

export function profileGetFail(payload) {
  return {
    type: types.PROFILE_GET_FAIL,
    payload
  };
}

export function profileUpdateRequest(payload) {
  return {
    type: types.PROFILE_UPDATE_REQUEST,
    payload
  };
}

export function profileUpdateSuccess(payload) {
  return {
    type: types.PROFILE_UPDATE_SUCCESS,
    payload
  };
}

export function profileUpdateFail(payload) {
  return {
    type: types.PROFILE_UPDATE_FAIL,
    payload
  };
}

export function profilePartialUpdateRequest(payload) {
  return {
    type: types.PROFILE_PARTIAL_UPDATE_REQUEST,
    payload
  };
}

export function profilePartialUpdateSuccess(payload) {
  return {
    type: types.PROFILE_PARTIAL_UPDATE_SUCCESS,
    payload
  };
}

export function profilePartialUpdateFail(payload) {
  return {
    type: types.PROFILE_PARTIAL_UPDATE_FAIL,
    payload
  };
}

export function passwordChangeRequest(payload) {
  return {
    type: types.PASSWORD_CHANGE_REQUEST,
    payload
  };
}

export function passwordChangeSuccess(payload) {
  return {
    type: types.PASSWORD_CHANGE_SUCCESS,
    payload
  };
}

export function passwordChangeFail(payload) {
  return {
    type: types.PASSWORD_CHANGE_FAIL,
    payload
  };
}

export function passwordResetRequest(payload) {
  return {
    type: types.PASSWORD_RESET_REQUEST,
    payload
  };
}

export function passwordResetSuccess(payload) {
  return {
    type: types.PASSWORD_RESET_SUCCESS,
    payload
  };
}

export function passwordResetFail(payload) {
  return {
    type: types.PASSWORD_RESET_FAIL,
    payload
  };
}

export function passwordResetConfirmRequest(payload) {
  return {
    type: types.PASSWORD_RESET_CONFIRM_REQUEST,
    payload
  };
}

export function passwordResetConfirmSuccess(payload) {
  return {
    type: types.PASSWORD_RESET_CONFIRM_SUCCESS,
    payload
  };
}
export function passwordResetConfirmFail(payload) {
  return {
    type: types.PASSWORD_RESET_CONFIRM_FAIL,
    payload
  };
}

export function initializeStatus() {
  return {
    type: types.INITIALIZE_STATUS
  };
}
