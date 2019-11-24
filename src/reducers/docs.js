import { DOCS_GET_REQUEST, DOCS_GET_SUCCESS, DOCS_GET_FAIL, DOCS_DELETE_REQUEST, DOCS_DELETE_SUCCESS, DOCS_DELETE_FAIL } from "../constants/docs";

const initialState = {
  docs: {},
  loading: false,
  error: null
};

export default function docsReducer(state = initialState, action) {
  switch (action.type) {
    case DOCS_GET_REQUEST:
      return {
        ...state,
        docs: {},
        loading: true,
      };
    case DOCS_GET_SUCCESS:
      return {
        ...state,
        docs: action.payload,
        loading: false,
        error: null
      };
    case DOCS_GET_FAIL:
      return {
        ...state,
        docs: {},
        loading: false,
        error: action.payload
      }
    case DOCS_DELETE_REQUEST:
    case DOCS_DELETE_SUCCESS:
    case DOCS_DELETE_FAIL:
    default:
      return state;
  }
}