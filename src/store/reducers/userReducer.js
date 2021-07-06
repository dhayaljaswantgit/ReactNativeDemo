import * as types from '../actionTypes';

const USER_INITIAL_STATE = {
  loading: false,
  userData: null,
  error: null,
};

export default (state = USER_INITIAL_STATE, actions) => {
  switch (actions.type) {
    case types.GET_USER_INFO_START:
      return {
        ...state,
        ...USER_INITIAL_STATE,
        loading: true,
      };

    case types.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        ...USER_INITIAL_STATE,
        loading: false,
        userData: actions.payload,
      };

    case types.GET_USER_INFO_FAIL:
      return {
        ...state,
        ...USER_INITIAL_STATE,
        loading: false,
        error: actions.payload,
      };

    default:
      return state;
  }
};
