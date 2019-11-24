import axios from "axios";
import { call, put, takeLatest, select } from "redux-saga/effects";
import { STATE_REQUEST, STATE_UPDATE_REQUEST } from "../constants/state";
import {
  stateSuccess,
  stateFail,
  stateUpdateSuccess,
  stateUpdateFail
} from "../actions/state";
import { getHeaders } from "../utils/authHelper";
import { statusList } from "../constants/user_status";

axios.defaults.baseURL = "https://cubahaus-api.herokuapp.com";

export function* stateRequestHandler() {
  const state = yield select();

  const params = {
    url: `/state/${state.auth.loggedInUser.user_id}/read`,
    headers: getHeaders()
  };
  try {
    const res = yield call(axios.request, params);
    yield put(stateSuccess(statusList[parseInt(res.data.user_status)]));
  } catch (err) {
    yield put(stateFail("Status not found"));
  }
}

// it's called when the user select time slot
export function* stateUpdateRequestHandler({ payload }) {
  const state = yield select();
  const { user_id } = state.auth.loggedInUser;
  const params = {
    url: `https://bwtwf6s31k.execute-api.us-east-1.amazonaws.com`,
    method: "post",
    headers: getHeaders(),
    data: {
      user_id,
      ...payload
    }
  };

  try {
    const res = yield call(axios.request, params);
    yield put(stateUpdateSuccess(statusList[parseInt(res.data)]));
  } catch (err) {
    yield put(stateUpdateFail(err.response));
  }
}

export default function* authSaga() {
  yield takeLatest(STATE_REQUEST, stateRequestHandler);
  yield takeLatest(STATE_UPDATE_REQUEST, stateUpdateRequestHandler);
}
