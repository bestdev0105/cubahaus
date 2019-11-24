import jwt_decode from "jwt-decode";
import * as types from "../constants/auth";

const token = localStorage.getItem("ch-userToken");

const initialState = {
  loggedInUser: token ? jwt_decode(token) : null,
  status: null,
  error: null,
  loading: false,
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        loggedInUser: null,
        status: type,
        error: null
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedInUser: { user_id: payload.user.pk, ...payload.user },
        token: payload.token,
        status: type,
        error: null
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        loggedInUser: null,
        status: type,
        error: payload
      };
    case types.LOGOUT_REQUEST:
      return {
        ...state,
        loggedInUser: null,
        status: type,
        error: null
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        loggedInUser: null,
        token: null,
        status: type,
        error: null
      };
    case types.LOGOUT_FAIL:
      return {
        ...state,
        status: type,
        error: payload
      };
    case types.REGISTER_REQUEST:
      return {
        ...state,
        loggedInUser: null,
        status: type,
        error: null
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loggedInUser: null,
        status: type,
        error: null
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        loggedInUser: null,
        status: type,
        error: payload
      };
    case types.PROFILE_UPDATE_REQUEST:
      return {
        ...state,
        status: type,
        error: null
      };
    case types.PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        loggedInUser: { user_id: payload.pk, ...payload },
        status: type,
        error: null
      };
    case types.PROFILE_UPDATE_FAIL:
      return {
        ...state,
        status: type,
        error: null
      };
    case types.PROFILE_PARTIAL_UPDATE_REQUEST:
      return {
        ...state,
        status: type,
        error: null
      };
    case types.PROFILE_PARTIAL_UPDATE_SUCCESS:
      return {
        ...state,
        loggedInUser: { user_id: payload.pk, ...payload },
        status: type,
        error: null
      };
    case types.PROFILE_PARTIAL_UPDATE_FAIL:
      return {
        ...state,
        status: type,
        error: null
      };
    case types.PROFILE_GET_REQUEST:
      return {
        ...state,
        status: type,
        error: null
      };
    case types.PROFILE_GET_SUCCESS:
      return {
        ...state,
        loggedInUser: { user_id: payload.pk, ...payload },
        status: type,
        error: null
      };
    case types.PROFILE_GET_FAIL:
      return {
        ...state,
        status: type,
        error: payload
      };
    case types.PASSWORD_CHANGE_REQUEST:
    case types.PASSWORD_RESET_REQUEST:
    case types.PASSWORD_RESET_CONFIRM_REQUEST:
      return {
        ...state,
        status: type,
        error: null
      };
    case types.PASSWORD_CHANGE_SUCCESS:
    case types.PASSWORD_RESET_SUCCESS:
    case types.PASSWORD_RESET_CONFIRM_SUCCESS:
      return {
        ...state,
        status: type,
        error: null
      };
    case types.PASSWORD_CHANGE_FAIL:
    case types.PASSWORD_RESET_FAIL:
    case types.PASSWORD_RESET_CONFIRM_FAIL:
      return {
        ...state,
        status: type,
        error: payload
      };
    case types.INITIALIZE_STATUS:
      return {
        ...state,
        status: null,
        error: null
      };
    default:
      return state;
  }
}
