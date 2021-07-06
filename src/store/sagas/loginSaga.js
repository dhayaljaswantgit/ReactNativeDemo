import {put, takeLatest} from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import API from '../../utils/api';

function* loginSaga() {
  yield takeLatest(actionTypes.LOGIN, login);
}

function* login(action) {
  yield put({
    type: actionTypes.LOGIN_START,
  });

  try {
    const response = yield API.serverCall({
      apiEndPoints: 'login',
      type: 'post',
      params: action.payload,
    });

    yield put({
      type: actionTypes.LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.LOGIN_FAIL,
      payload: error,
    });
  }
}

export default loginSaga;
