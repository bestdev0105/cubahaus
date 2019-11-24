import { call, put, takeLatest, select } from 'redux-saga/effects'
import axios from "axios";

import { DOCS_GET_REQUEST } from "../constants/docs";
import { getHeaders } from '../utils/authHelper';
import { getDocsSuccess, getDocsFail } from '../actions/docs';

function* docsListRequestHandler() {
  const state = yield select();
  const userId = state.auth.loggedInUser.user_id;

  const params = {
    url: `/docs/${userId}/update`,
    method: 'get',
    headers: getHeaders()
  }
  try {
    const res = yield call(axios.request, params)
    yield put(getDocsSuccess(res.data))
  } catch (err) {
    yield put(getDocsFail(err.response.data))
  }
}

export default function* authSaga() {
  yield takeLatest(DOCS_GET_REQUEST, docsListRequestHandler);
}