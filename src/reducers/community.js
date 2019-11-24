import * as types from "../constants/community";
import {
  ROOM_SELECT_REQUEST,
  ROOM_SELECT_SUCCESS,
  ROOM_SELECT_FAIL
} from "../constants/room";

const initialState = {
  loading: false,
  list: [],
  detail: null,
  error: null
};

export default function communityReducer(state = initialState, action) {
  switch (action.type) {
    case types.COMMUNITY_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.COMMUNITY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: null
      };
    case types.COMMUNITY_LIST_FAIL:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.err
      };
    case types.COMMUNITY_DETAIL_REQUEST:
      return {
        ...state,
        detail: null,
        loading: true
      };
    case types.COMMUNITY_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        detail: action.payload,
        error: null
      };
    case types.COMMUNITY_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        detail: null,
        error: action.err
      };
    case ROOM_SELECT_REQUEST:
      return {
        ...state,
        error: null
      };
    case ROOM_SELECT_SUCCESS:
      return {
        ...state,
        detail: {
          ...state.detail,
          rooms: state.detail.rooms.map(room => {
            if (room.pk === action.payload.id) {
              return {
                ...room,
                selected: action.payload.selected
              };
            } else return room;
          })
        },
        error: null
      };
    case ROOM_SELECT_FAIL:
      return {
        ...state,
        error: action.err
      };
    default:
      return state;
  }
}
