import {
  ROOM_LIST_REQUEST,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_FAIL,
  ROOM_DETAIL_REQUEST,
  ROOM_DETAIL_SUCCESS,
  ROOM_DETAIL_FAIL,
  WISH_LIST_REQUEST,
  WISH_LIST_SUCCESS,
  WISH_LIST_FAIL,
  FINAL_SELECT_REQUEST,
  FINAL_SELECT_SUCCESS,
  FINAL_SELECT_FAIL
} from "../constants/room";

const initialState = {
  list: [],
  wishlist: [],
  detail: null,
  status: null,
  error: null,
  loading: false
};

export default function roomReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ROOM_LIST_REQUEST:
      return {
        ...state,
        list: null,
        loading: true,
        status: type,
        error: null
      };
    case ROOM_LIST_SUCCESS:
      return {
        ...state,
        list: payload,
        status: type,
        loading: false,
        error: null
      };
    case ROOM_LIST_FAIL:
      return {
        ...state,
        list: null,
        loading: false,
        status: type,
        error: payload
      };
    case ROOM_DETAIL_REQUEST:
      return {
        ...state,
        detail: null,
        status: type,
        error: null
      };
    case ROOM_DETAIL_SUCCESS:
      return {
        ...state,
        detail: payload,
        status: type,
        error: null
      };
    case ROOM_DETAIL_FAIL:
      return {
        ...state,
        detail: null,
        status: type,
        error: payload
      };
    case WISH_LIST_REQUEST:
      return {
        ...state,
        wishlist: null,
        status: type,
        error: null
      };
    case WISH_LIST_SUCCESS:
      return {
        ...state,
        wishlist: payload,
        status: type,
        error: null
      };
    case WISH_LIST_FAIL:
      return {
        ...state,
        wishlist: [],
        status: type,
        error: payload
      };
    case FINAL_SELECT_REQUEST:
      return {
        ...state,
        status: type,
        loading: true
      };
    case FINAL_SELECT_SUCCESS:
      return {
        ...state,
        status: type,
        loading: false,
        error: null
      };
    case FINAL_SELECT_FAIL:
      return {
        ...state,
        loading: false,
        status: type,
        error: payload
      };
    default:
      return state;
  }
}
