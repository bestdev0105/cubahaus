import {
  DOCS_GET_REQUEST,
  DOCS_GET_SUCCESS,
  DOCS_GET_FAIL
} from "../constants/docs";

export function getDocsRequest() {
  return {
    type: DOCS_GET_REQUEST
  };
}
export function getDocsSuccess(payload) {
  return {
    type: DOCS_GET_SUCCESS,
    payload
  };
}

export function getDocsFail(payload) {
  return {
    type: DOCS_GET_FAIL
  };
}
