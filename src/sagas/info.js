import { call, put, takeLatest, select } from "redux-saga/effects";
import axios from "axios";

import { GET_INFO_REQUEST, UPDATE_INFO_REQUEST } from "../constants/info";
import { getHeaders } from "../utils/authHelper";
import {
  getInfoSuccess,
  getInfoFail,
  updateInfoSuccess,
  updateInfoFail
} from "../actions/info";
import { enqueueSnackbar } from "../actions/snackbar";

function* getInfoRequestHandler() {
  const state = yield select();
  const userId = state.auth.loggedInUser.user_id;

  const params = {
    url: `/info/${userId}/update`,
    headers: getHeaders()
  };
  try {
    const res = yield call(axios.request, params);
    yield put(getInfoSuccess(res.data));
  } catch (err) {
    yield put(getInfoFail(err.response.data));
  }
}

function* updateInfoRequestHandler({ payload }) {
  const state = yield select();
  const userId = state.auth.loggedInUser.user_id;

  const params = {
    url: `/info/${userId}/update`,
    method: "put",
    headers: getHeaders(),
    data: payload
  };
  try {
    const res = yield call(axios.request, params);
    yield put(updateInfoSuccess(res.data));
    yield put(
      enqueueSnackbar({
        message: "Update Info Success",
        options: { variant: "success" }
      })
    );
  } catch (err) {
    yield put(updateInfoFail(err.response.data));
    yield put(
      enqueueSnackbar({
        message: "Update Info Failed",
        options: { variant: "error" }
      })
    );
  }
}

export default function* infoSaga() {
  yield takeLatest(GET_INFO_REQUEST, getInfoRequestHandler);
  yield takeLatest(UPDATE_INFO_REQUEST, updateInfoRequestHandler);
}
