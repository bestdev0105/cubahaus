import {
  SEMESTER_LIST_REQUEST,
  SEMESTER_LIST_SUCCESS,
  SEMESTER_LIST_FAIL
} from "../constants/application";

const initialState = {
  list: [],
  error: null,
  loading: false
};

export default function semestersReducer(state = initialState, action) {
  switch (action.type) {
    case SEMESTER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case SEMESTER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: null
      };
    case SEMESTER_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
