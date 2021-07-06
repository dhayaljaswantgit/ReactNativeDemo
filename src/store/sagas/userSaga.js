import {put, takeLatest} from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import API from '../../utils/api';

function* userSaga() {
  yield takeLatest(actionTypes.GET_USER_INFO_START, getUserInfo);
}

function* getUserInfo() {
  try {
    const response = yield API.serverCall({
      apiEndPoints: 'users/2',
    });

    console.log('response => ', response.data);

    yield put({
      type: actionTypes.GET_USER_INFO_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.GET_USER_INFO_FAIL,
      payload: error,
    });
  }
}

export default userSaga;
