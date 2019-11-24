import * as types from "../constants/info";

export function getInfoRequest() {
  return {
    type: types.GET_INFO_REQUEST
  };
}
export function getInfoSuccess(payload) {
  return {
    type: types.GET_INFO_SUCCESS,
    payload
  };
}

export function getInfoFail(err) {
  return {
    type: types.GET_INFO_FAIL,
    err
  };
}

export function updateInfoRequest(payload) {
  return {
    type: types.UPDATE_INFO_REQUEST,
    payload
  };
}
export function updateInfoSuccess(payload) {
  return {
    type: types.UPDATE_INFO_SUCCESS,
    payload
  };
}

export function updateInfoFail(err) {
  return {
    type: types.UPDATE_INFO_FAIL,
    err
  };
}
