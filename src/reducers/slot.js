import {
  SLOT_LIST_REQUEST,
  SLOT_LIST_SUCCESS,
  SLOT_LIST_FAIL,
  SLOT_SELECT_REQUEST,
  SLOT_SELECT_SUCCESS,
  SLOT_SELECT_FAIL,
} from "../constants/slot";

const initialState = {
  list: [],
  status: null,
  error: null
};

export default function slotReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SLOT_LIST_REQUEST:
      return {
        ...state,
        list: null,
        status: type,
        error: null
      };
    case SLOT_LIST_SUCCESS:
      return {
        ...state,
        list: payload,
        status: type,
        error: null
      };
    case SLOT_LIST_FAIL:
      return {
        ...state,
        list: [],
        status: type,
        error: payload
      };
    case SLOT_SELECT_REQUEST:
      return {
        ...state,
        status: type,
        error: null
      }
    case SLOT_SELECT_SUCCESS:
      return {
        ...state,
        list: state.list.map(slot => {
          if (slot.pk === payload.id) {
            slot.selected = payload.selected
          } else {
            slot.selected = false
          }
          return slot;
        }),
        result: action.payload,
        status: type,
        error: null
      };
    case SLOT_SELECT_FAIL:
      return {
        ...state,
        status: type,
        error: payload
      };
    default:
      return state;
  }
}
