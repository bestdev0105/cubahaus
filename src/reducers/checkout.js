import {
  GET_CHECKOUT_PREVIEW_REQUEST,
  GET_CHECKOUT_PREVIEW_SUCCESS,
  GET_CHECKOUT_PREVIEW_FAIL
} from "../constants/checkout";

const initialState = {
  loading: false,
  preview: null,
  error: null
};

export default function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHECKOUT_PREVIEW_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_CHECKOUT_PREVIEW_SUCCESS:
      return {
        ...state,
        preview: action.payload,
        loading: false
      };
    case GET_CHECKOUT_PREVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
