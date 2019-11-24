import {
  STATE_REQUEST,
  STATE_SUCCESS,
  STATE_FAIL,
  STATE_UPDATE_REQUEST,
  STATE_UPDATE_SUCCESS,
  STATE_UPDATE_FAIL,
  SET_SELECTED_STATE
} from "../constants/state";

export function stateRequest() {
  return {
    type: STATE_REQUEST
  };
}

export function stateSuccess(payload) {
  return {
    type: STATE_SUCCESS,
    payload
  };
}

export function stateFail(payload) {
  return {
    type: STATE_FAIL,
    payload
  };
}

export function stateUpdateRequest(payload) {
  return {
    type: STATE_UPDATE_REQUEST,
    payload
  };
}

export function stateUpdateSuccess(payload) {
  return {
    type: STATE_UPDATE_SUCCESS,
    payload
  };
}

export function stateUpdateFail(payload) {
  return {
    type: STATE_UPDATE_FAIL,
    payload
  };
}

export function setSelectedState(payload) {
  return {
    type: SET_SELECTED_STATE,
    payload
  };
}
