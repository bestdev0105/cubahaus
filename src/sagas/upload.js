import { call, put, takeLatest, select } from "redux-saga/effects";
import { UPLOAD_REQUEST } from "../constants/upload";

import { uploadSuccess, uploadFail } from "../actions/upload";

import axios from "axios";

import { getHeaders } from "../utils/authHelper";

axios.defaults.baseURL = "https://cubahaus-api.herokuapp.com";

function* uploadRequestHandler({ payload }) {
  const state = yield select();
  const { auth } = state;
  const user_id = auth.loggedInUser.user_id;

  payload.append('user', user_id);
  const params = {
    url: `/fileuploader/create`,
    method: "post",
    headers: getHeaders(),
    data: payload
  };

  try {
    const res = yield call(axios.request, params);
    yield put(uploadSuccess(res.data));
  } catch (err) {
    yield put(uploadFail(err.response.data));
  }
}

export default function* uploadSaga() {
  yield takeLatest(UPLOAD_REQUEST, uploadRequestHandler);
}
