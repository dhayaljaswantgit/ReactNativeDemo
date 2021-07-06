export const LOGIN = 'LOGIN'; //Saga API call
export const LOGIN_START = 'LOGIN_START'; //I'll on my loader in store
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'; //I'll set/update my user data, and I'll off my loader in store
export const LOGIN_FAIL = 'LOGIN_FAIL'; //I'll set/update my login error data, and I'll off my loader in store

export const LOGOUT = 'LOGOUT'; // I'll reset my login reducer

export const SET_USER = 'SET_USER'; // I'll going to set my user to store

export const GET_USER_INFO_START = 'GET_USER_INFO_START';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAIL = 'GET_USER_INFO_FAIL';
