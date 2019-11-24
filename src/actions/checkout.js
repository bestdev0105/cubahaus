import {
  GET_CHECKOUT_PREVIEW_REQUEST,
  GET_CHECKOUT_PREVIEW_SUCCESS,
  GET_CHECKOUT_PREVIEW_FAIL
} from "../constants/checkout";

export const getCheckoutPreviewRequest = () => ({
  type: GET_CHECKOUT_PREVIEW_REQUEST
});

export const getCheckoutPreviewSuccess = payload => ({
  type: GET_CHECKOUT_PREVIEW_SUCCESS,
  payload
});

export const getCheckoutPreviewFail = error => ({
  type: GET_CHECKOUT_PREVIEW_FAIL,
  error
});
