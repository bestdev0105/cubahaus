import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  ROOM_LIST_REQUEST,
  ROOM_DETAIL_REQUEST,
  ROOM_SELECT_REQUEST,
  WISH_LIST_REQUEST,
  FINAL_SELECT_REQUEST
} from "../constants/room";
import {
  roomListSuccess,
  roomListFail,
  roomDetailSuccess,
  roomDetailFail,
  roomSelectSuccess,
  roomSelectFail,
  wishListSuccess,
  wishListFail,
  finalSelectSuccess,
  finalSelectFail
} from "../actions/room";

import { enqueueSnackbar } from "../actions/snackbar";
import { getHeaders } from "../utils/authHelper";

export function* roomListRequestHandler() {
  const params = {
    url: "/rooms/",
    method: "get",
    headers: getHeaders()
  };
  try {
    const res = yield call(axios.request, params);
    yield put(roomListSuccess(res.data));
  } catch (err) {
    yield put(roomListFail(err.response));
  }
}

export function* roomDetailRequestHandler({ payload }) {
  const params = {
    url: `/rooms/${payload}/`,
    method: "get",
    headers: getHeaders()
  };

  try {
    const res = yield call(axios.request, params);
    yield put(roomDetailSuccess(res.data));
  } catch (err) {
    yield put(roomDetailFail(err.response));
  }
}

export function* roomSelectRequestHandler({ payload }) {
  const params = {
    url: `/rooms/${payload}/select/`,
    method: "post",
    headers: getHeaders()
  };

  try {
    const res = yield call(axios.request, params);
    yield put(roomSelectSuccess({ id: payload, ...res.data }));
  } catch (err) {
    yield put(roomSelectFail(err.response));
  }
}

export function* wishListRequestHandler() {
  const params = {
    url: "/wishlist/",
    method: "get",
    headers: getHeaders()
  };
  try {
    const res = yield call(axios.request, params);
    yield put(wishListSuccess(res.data[0].rooms));
  } catch (err) {
    yield put(wishListFail(err.response));
  }
}

export function* finalSelectRequestHandler({ payload }) {
  const params = {
    url: "/final/create",
    method: "post",
    headers: getHeaders(),
    data: payload
  };
  try {
    const res = yield call(axios.request, params);
    yield put(finalSelectSuccess(res.data));
  } catch (err) {
    yield put(finalSelectFail(err.response));
    yield put(
      enqueueSnackbar({
        message: "Confirm Failed",
        options: { variant: "error" }
      })
    );
  }
}

export default function* authSaga() {
  yield takeLatest(ROOM_LIST_REQUEST, roomListRequestHandler);
  yield takeLatest(ROOM_DETAIL_REQUEST, roomDetailRequestHandler);
  yield takeLatest(ROOM_SELECT_REQUEST, roomSelectRequestHandler);
  yield takeLatest(WISH_LIST_REQUEST, wishListRequestHandler);
  yield takeLatest(FINAL_SELECT_REQUEST, finalSelectRequestHandler);
}
