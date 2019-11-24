import {
  APPLICATION_DETAIL_REQUEST,
  APPLICATION_DETAIL_SUCCESS,
  APPLICATION_DETAIL_FAIL,
  APPLICATION_DETAIL_UPDATE_REQUEST,
  APPLICATION_DETAIL_UPDATE_SUCCESS,
  APPLICATION_DETAIL_UPDATE_FAIL,
  UNIVERSITY_LIST_REQUEST,
  UNIVERSITY_LIST_SUCCESS,
  UNIVERSITY_LIST_FAIL,
  SEMESTER_LIST_REQUEST,
  SEMESTER_LIST_SUCCESS,
  SEMESTER_LIST_FAIL
} from "../constants/application";

export function applicationDetailRequest(payload) {
  return {
    type: APPLICATION_DETAIL_REQUEST
  };
}

export function applicationDetailSuccess(payload) {
  return {
    type: APPLICATION_DETAIL_SUCCESS,
    payload
  };
}

export function applicationDetailFail(payload) {
  return {
    type: APPLICATION_DETAIL_FAIL,
    payload
  };
}

export function applicationUpdateRequest(payload) {
  return {
    type: APPLICATION_DETAIL_UPDATE_REQUEST,
    payload
  };
}

export function applicationUpdateSuccess(payload) {
  return {
    type: APPLICATION_DETAIL_UPDATE_SUCCESS,
    payload
  };
}

export function applicationUpdateFail(payload) {
  return {
    type: APPLICATION_DETAIL_UPDATE_FAIL,
    payload
  };
}

export function universityListRequest() {
  return {
    type: UNIVERSITY_LIST_REQUEST
  };
}

export function universityListSuccess(payload) {
  return {
    type: UNIVERSITY_LIST_SUCCESS,
    payload
  };
}

export function universityListFail(payload) {
  return {
    type: UNIVERSITY_LIST_FAIL,
    payload
  };
}

export function semesterListRequest() {
  return {
    type: SEMESTER_LIST_REQUEST
  };
}

export function semesterListSuccess(payload) {
  return {
    type: SEMESTER_LIST_SUCCESS,
    payload
  };
}

export function semesterListFail(payload) {
  return {
    type: SEMESTER_LIST_FAIL,
    payload
  };
}
