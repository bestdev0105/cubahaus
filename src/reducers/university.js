import {
  UNIVERSITY_LIST_REQUEST,
  UNIVERSITY_LIST_SUCCESS,
  UNIVERSITY_LIST_FAIL
} from "../constants/application";

const initialState = {
  list: [],
  error: null,
  loading: false
};

export default function universityReducer(state = initialState, action) {
  switch (action.type) {
    case UNIVERSITY_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case UNIVERSITY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: null
      };
    case UNIVERSITY_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
