import {
  STATE_REQUEST,
  STATE_SUCCESS,
  STATE_FAIL,
  STATE_UPDATE_REQUEST,
  STATE_UPDATE_SUCCESS,
  STATE_UPDATE_FAIL,
  SET_SELECTED_STATE,
} from "../constants/state";

const initialState = {
  userStatus: null,
  selectedStatus: null,
  status: null,
  error: null
};

export default function slotReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case STATE_REQUEST:
      return {
        ...state,
        userStatus: null,
        selectedStatus: null,
        status: type,
        error: null
      };
    case STATE_SUCCESS:
      return {
        ...state,
        userStatus: payload,
        selectedStatus: payload,
        status: type,
        error: null
      };
    case STATE_FAIL:
      return {
        ...state,
        status: type,
        error: payload
      };
    case STATE_UPDATE_REQUEST:
      return {
        ...state,
        status: type,
        error: null
      };
    case STATE_UPDATE_SUCCESS:
      return {
        ...state,
        userStatus: payload,
        selectedStatus: payload,
        status: type,
        error: null
      };
    case STATE_UPDATE_FAIL:
      return {
        ...state,
        status: type,
        error: payload
      };
    case SET_SELECTED_STATE:
      return {
        ...state,
        selectedStatus: payload,
        error: null
      };
    default:
      return state;
  }
}
