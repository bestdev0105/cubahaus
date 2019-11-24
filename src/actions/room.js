import {
  ROOM_LIST_REQUEST,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,
  ROOM_DETAIL_REQUEST,
  ROOM_DETAIL_SUCCESS,
  ROOM_DETAIL_FAIL,
  ROOM_SELECT_REQUEST,
  ROOM_SELECT_SUCCESS,
  ROOM_SELECT_FAIL,
  WISH_LIST_REQUEST,
  WISH_LIST_SUCCESS,
  WISH_LIST_FAIL,
  FINAL_SELECT_REQUEST,
  FINAL_SELECT_SUCCESS,
  FINAL_SELECT_FAIL
} from "../constants/room";

export function roomListRequest(payload) {
  return {
    type: ROOM_LIST_REQUEST,
    payload
  };
}

export function roomListSuccess(payload) {
  return {
    type: ROOM_LIST_SUCCESS,
    payload
  };
}

export function roomListFail(payload) {
  return {
    type: ROOM_LIST_FAIL,
    payload
  };
}

export function roomDetailRequest(payload) {
  return {
    type: ROOM_DETAIL_REQUEST,
    payload
  };
}

export function roomDetailSuccess(payload) {
  return {
    type: ROOM_DETAIL_SUCCESS,
    payload
  };
}

export function roomDetailFail(payload) {
  return {
    type: ROOM_DETAIL_FAIL,
    payload
  };
}

export function roomSelectRequest(payload) {
  return {
    type: ROOM_SELECT_REQUEST,
    payload
  }
}

export function roomSelectSuccess(payload) {
  return {
    type: ROOM_SELECT_SUCCESS,
    payload
  }
}

export function roomSelectFail(payload) {
  return {
    type: ROOM_SELECT_FAIL,
    payload
  }
}

export function wishListRequest(payload) {
  return {
    type: WISH_LIST_REQUEST,
    payload
  }
}

export function wishListSuccess(payload) {
  return {
    type: WISH_LIST_SUCCESS,
    payload
  }
}

export function wishListFail(payload) {
  return {
    type: WISH_LIST_FAIL,
    payload
  }
}

export function finalSelectRequest(payload) {
  return {
    type: FINAL_SELECT_REQUEST,
    payload
  }
}

export function finalSelectSuccess(payload) {
  return {
    type: FINAL_SELECT_SUCCESS,
    payload
  }
}

export function finalSelectFail(payload) {
  return {
    type: FINAL_SELECT_FAIL,
    payload
  }
}
