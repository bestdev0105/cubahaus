import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  COMMUNITY_LIST_REQUEST,
  COMMUNITY_DETAIL_REQUEST
} from "../constants/community";
import { getHeaders } from "../utils/authHelper";
import {
  communityListSuccess,
  communityListFail,
  communityDetailSuccess,
  communityDetailFail
} from "../actions/community";

function* communityListRequestHandler() {
  const params = {
    url: "/communities",
    headers: getHeaders()
  };

  try {
    const res = yield call(axios.request, params);
    yield put(communityListSuccess(res.data));
  } catch (e) {
    yield put(communityListFail(e.response));
  }
}

function* communityDetailRequestHandler({ payload }) {
  console.log("communityPayload", payload);
  const params = {
    url: `/communities/${payload}`,
    headers: getHeaders()
  };

  try {
    const res = yield call(axios.request, params);
    yield put(communityDetailSuccess(res.data));
  } catch (e) {
    yield put(communityDetailFail(e.response));
  }
}

export default function* communitySaga() {
  yield takeLatest(COMMUNITY_LIST_REQUEST, communityListRequestHandler);
  yield takeLatest(COMMUNITY_DETAIL_REQUEST, communityDetailRequestHandler);
}
