import * as types from "../constants/info";

const initialState = {
  info: {},
  loading: false,
  error: null,
  status: null
};

export default function docsReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_INFO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.GET_INFO_SUCCESS:
      return {
        ...state,
        info: action.payload,
        loading: false,
        error: null
      };
    case types.GET_INFO_FAIL:
      return {
        ...state,
        info: null,
        loading: false,
        error: action.err
      };
    case types.UPDATE_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.UPDATE_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        info: action.payload,
        status: types.UPDATE_INFO_SUCCESS
      };
    case types.UPDATE_INFO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.err
      };
    default:
      return state;
  }
}
