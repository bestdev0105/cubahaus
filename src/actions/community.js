import * as types from "../constants/community";

export const communityListRequest = () => ({
  type: types.COMMUNITY_LIST_REQUEST
});

export const communityListSuccess = payload => ({
  type: types.COMMUNITY_LIST_SUCCESS,
  payload
});

export const communityListFail = err => ({
  type: types.COMMUNITY_LIST_FAIL,
  err
});

export const communityDetailRequest = payload => ({
  type: types.COMMUNITY_DETAIL_REQUEST,
  payload
});

export const communityDetailSuccess = payload => ({
  type: types.COMMUNITY_DETAIL_SUCCESS,
  payload
});

export const communityDetailFail = err => ({
  type: types.COMMUNITY_DETAIL_FAIL,
  err
});
