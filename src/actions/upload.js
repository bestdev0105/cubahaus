import {
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
  UPLOAD_FAIL
} from "../constants/upload";

export function uploadRequest(payload) {
  return {
    type: UPLOAD_REQUEST,
    payload
  };
}

export function uploadSuccess(payload) {
  return {
    type: UPLOAD_SUCCESS,
    payload
  };
}

export function uploadFail(payload) {
  return {
    type: UPLOAD_FAIL,
    payload
  };
}
