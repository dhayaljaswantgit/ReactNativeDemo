import AsyncStorage from '@react-native-community/async-storage';
import * as types from '../actionTypes';

const LOGIN_INITIAL_STATE = {
  loading: false,
  user: null,
  userToken: null,
  error: null,
};

export default (state = LOGIN_INITIAL_STATE, actions) => {
  switch (actions.type) {
    case types.LOGIN_START:
      return {
        ...state,
        ...LOGIN_INITIAL_STATE,
        loading: true,
      };

    case types.LOGIN_SUCCESS:
      AsyncStorage.setItem('userData', JSON.stringify(actions.payload));
      return {
        ...state,
        ...LOGIN_INITIAL_STATE,
        loading: false,
        user: actions.payload,
        userToken: actions.payload.token,
      };

    case types.LOGIN_FAIL:
      return {
        ...state,
        ...LOGIN_INITIAL_STATE,
        loading: false,
      };

    case types.LOGOUT:
      AsyncStorage.removeItem('userData');
      return {
        ...state,
        ...LOGIN_INITIAL_STATE,
      };

    case types.SET_USER:
      return {
        ...state,
        ...LOGIN_INITIAL_STATE,
        user: actions.payload,
        userToken: actions.payload.token,
      };

    default:
      return state;
  }
};
