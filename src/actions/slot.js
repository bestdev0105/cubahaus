import {
  SLOT_LIST_REQUEST,
  SLOT_LIST_SUCCESS,
  SLOT_LIST_FAIL,
  SLOT_SELECT_REQUEST,
  SLOT_SELECT_SUCCESS,
  SLOT_SELECT_FAIL,
} from "../constants/slot";

export function slotListRequest(payload) {
  return {
    type: SLOT_LIST_REQUEST,
    payload
  };
}

export function slotListSuccess(payload) {
  return {
    type: SLOT_LIST_SUCCESS,
    payload
  };
}

export function slotListFail(payload) {
  return {
    type: SLOT_LIST_FAIL,
    payload
  };
}

export function slotSelectRequest(payload) {
  return {
    type: SLOT_SELECT_REQUEST,
    payload
  };
}

export function slotSelectSuccess(payload) {
  return {
    type: SLOT_SELECT_SUCCESS,
    payload
  };
}

export function slotSelectFail(payload) {
  return {
    type: SLOT_SELECT_FAIL,
    payload
  };
}