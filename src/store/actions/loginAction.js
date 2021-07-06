import * as types from '../actionTypes';

export const initLogin = request => ({
  type: types.LOGIN,
  payload: request,
});

export const logoutUser = () => ({
  type: types.LOGOUT,
});

export const setUserData = userData => ({
  type: types.SET_USER,
  payload: userData,
});
