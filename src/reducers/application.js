import {
  APPLICATION_DETAIL_REQUEST,
  APPLICATION_DETAIL_SUCCESS,
  APPLICATION_DETAIL_FAIL,
  APPLICATION_DETAIL_UPDATE_REQUEST,
  APPLICATION_DETAIL_UPDATE_SUCCESS,
  APPLICATION_DETAIL_UPDATE_FAIL
} from "../constants/application";

const initialState = {
  detail: null,
  status: null,
  error: null
};

export default function applicationReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case APPLICATION_DETAIL_REQUEST:
      return {
        ...state,
        detail: null,
        status: type,
        error: null
      };
    case APPLICATION_DETAIL_SUCCESS:
      return {
        ...state,
        detail: payload,
        status: type,
        error: null
      };
    case APPLICATION_DETAIL_FAIL:
      return {
        ...state,
        detail: null,
        status: type,
        error: payload
      };
    case APPLICATION_DETAIL_UPDATE_REQUEST:
      return {
        ...state,
        status: type,
        error: null
      };
    case APPLICATION_DETAIL_UPDATE_SUCCESS:
      return {
        ...state,
        detail: payload,
        status: type,
        error: null
      };
    case APPLICATION_DETAIL_UPDATE_FAIL:
      return {
        ...state,
        status: type,
        error: payload
      };
    default:
      return state;
  }
}
