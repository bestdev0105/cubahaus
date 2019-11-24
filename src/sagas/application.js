import axios from "axios";
import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  APPLICATION_DETAIL_REQUEST,
  APPLICATION_DETAIL_UPDATE_REQUEST,
  UNIVERSITY_LIST_REQUEST,
  SEMESTER_LIST_REQUEST
} from "../constants/application";
import {
  applicationDetailSuccess,
  applicationDetailFail,
  applicationUpdateSuccess,
  applicationUpdateFail,
  universityListSuccess,
  universityListFail,
  semesterListSuccess,
  semesterListFail
} from "../actions/application";

import { getHeaders } from "../utils/authHelper";
import { stateRequest } from "../actions/state";

export function* applicationDetailRequestHandler({ payload }) {
  const state = yield select();
  const params = {
    url: `/application/${state.auth.loggedInUser.user_id}/update`,
    method: "get",
    headers: getHeaders()
  };
  try {
    const res = yield call(axios.request, params);
    const university = yield call(axios.get, "/uni");

    const payload = {
      ...res.data,
      university: university.data.find(
        item => item.university_name === res.data.university
      )
    };
    yield put(applicationDetailSuccess(payload));
    yield put(universityListSuccess(university.data));
  } catch (err) {
    yield put(applicationDetailFail(err.response));
  }
}

export function* applicationUpdateRequestHandler({ payload }) {
  const state = yield select();
  const params = {
    url: `/application/${state.auth.loggedInUser.user_id}/update`,
    method: "patch",
    headers: getHeaders(),
    data: payload
  };

  try {
    const res = yield call(axios.request, params);
    yield put(
      applicationUpdateSuccess({
        ...res.data,
        university: state.university.list.find(
          item => item.university_name === res.data.university
        )
      })
    );
    yield put(stateRequest());
  } catch (err) {
    yield put(applicationUpdateFail(err.response));
  }
}

export function* universityListRequestHandler() {
  const params = {
    url: "/uni",
    method: "get"
  };

  try {
    const res = yield call(axios.request, params);
    yield put(universityListSuccess(res.data));
  } catch (err) {
    yield put(universityListFail(err.response));
  }
}

export function* semesterListRequestHandler() {
  const params = {
    url: "/semesters",
    method: "get"
  };

  try {
    const res = yield call(axios.request, params);
    yield put(semesterListSuccess(res.data));
  } catch (err) {
    yield put(semesterListFail(err.response));
  }
}

export default function* authSaga() {
  yield takeLatest(APPLICATION_DETAIL_REQUEST, applicationDetailRequestHandler);
  yield takeLatest(
    APPLICATION_DETAIL_UPDATE_REQUEST,
    applicationUpdateRequestHandler
  );
  yield takeLatest(UNIVERSITY_LIST_REQUEST, universityListRequestHandler);
  yield takeLatest(SEMESTER_LIST_REQUEST, semesterListRequestHandler);
}
