import { UPLOAD_REQUEST, UPLOAD_SUCCESS, UPLOAD_FAIL } from "../constants/upload";

const initialState = {
  uploading: false,
  error: null
};

export default function uploadReducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_REQUEST:
      return {
        ...state,
        uploading: true,
        error: null
      }
    case UPLOAD_SUCCESS:
      return {
        ...state,
        uploading: false,
        error: null,
      }
    case UPLOAD_FAIL:
      return {
        ...state,
        uploading: false,
        error: action.payload
      }
    default:
      return state;
  }
}