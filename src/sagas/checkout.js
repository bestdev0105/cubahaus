import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { getHeaders } from "../utils/authHelper";
import {
  getCheckoutPreviewSuccess,
  getCheckoutPreviewFail
} from "../actions/checkout";
import { GET_CHECKOUT_PREVIEW_REQUEST } from "../constants/checkout";

function* getCheckoutPreviewRequestHandler() {
  const params = {
    url: "/preview",
    headers: getHeaders()
  };

  try {
    const res = yield call(axios.request, params);
    yield put(getCheckoutPreviewSuccess(res.data));
  } catch (e) {
    yield put(getCheckoutPreviewFail(e.response));
  }
}

export default function* communitySaga() {
  yield takeLatest(
    GET_CHECKOUT_PREVIEW_REQUEST,
    getCheckoutPreviewRequestHandler
  );
}
