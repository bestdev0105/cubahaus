import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { SLOT_LIST_REQUEST, SLOT_SELECT_REQUEST } from "../constants/slot";
import {
  slotListSuccess,
  slotListFail,
  slotSelectSuccess,
  slotSelectFail
} from "../actions/slot";
import { enqueueSnackbar } from "../actions/snackbar";
import { getHeaders } from "../utils/authHelper";

export function* slotListRequestHandler() {
  const params = {
    url: "/slots/",
    method: "get",
    headers: getHeaders()
  };
  try {
    const res = yield call(axios.request, params);
    yield put(slotListSuccess(res.data));
  } catch (err) {
    yield put(slotListFail("Invalid Username or Password"));
  }
}

export function* slotSelectRequestHandler({ payload }) {
  console.log("slogpayload", payload, getHeaders());
  const params = {
    url: `/slots/${payload}/select/`,
    method: "post",
    headers: getHeaders()
  };

  try {
    const res = yield call(axios.request, params);
    yield put(slotSelectSuccess({ id: payload, ...res.data }));
  } catch (err) {
    yield put(slotSelectFail(err.response));
    yield put(
      enqueueSnackbar({
        message: "Slot Selection Failed",
        options: { variant: "error" }
      })
    );
  }
}

export default function* authSaga() {
  yield takeLatest(SLOT_LIST_REQUEST, slotListRequestHandler);
  yield takeLatest(SLOT_SELECT_REQUEST, slotSelectRequestHandler);
}
