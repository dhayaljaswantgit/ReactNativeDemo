import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {Provider} from 'react-redux';

import {fork, all} from 'redux-saga/effects';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {combineReducers} from 'redux';
import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

const {width, height} = Dimensions.get('window');

const types = {
  LOGIN: 'LOGIN', //Saga API call
  LOGIN_START: 'LOGIN_START', //I'll on my loader in store
  LOGIN_SUCCESS: 'LOGIN_SUCCESS', //I'll set/update my user data, and I'll off my loader in store
  LOGIN_FAIL: 'LOGIN_FAIL', //I'll set/update my login error data, and I'll off my loader in store

  LOGOUT: 'LOGOUT', // I'll reset my login reducer
};

/** Creating Login Reducer Starts
 * -----------------------*/
const LOGIN_INITIAL_STATE = {
  loading: false,
  user: null,
  userToken: null,
  error: null,
};

const loginReducer = (state = LOGIN_INITIAL_STATE, actions) => {
  switch (actions.type) {
    case types.LOGIN_START:
      return {
        ...state,
        ...LOGIN_INITIAL_STATE,
        loading: true,
      };

    case types.LOGIN_SUCCESS:
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
        error: actions.payload,
      };

    case types.LOGOUT:
      return {
        ...state,
        ...LOGIN_INITIAL_STATE,
      };

    default:
      return state;
  }
};

/** Creating Login Reducer Ends
 * -----------------------*/

/** Creating Login Saga Starts
 * -----------------------*/

function* loginSaga() {
  yield takeLatest(types.LOGIN, login);
}

function* login(action) {
  yield put({
    type: types.LOGIN_START,
  });

  try {
    const response = yield call(loginAPI, action);

    yield put({
      type: types.LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: types.LOGIN_FAIL,
      payload: error,
    });
  }
}

function loginAPI(action) {
  return axios.post('https://reqres.in/api/login', action.payload);
}

//Combine saga
function* rootSaga() {
  yield all([fork(loginSaga)]);
}

/** Creating Login Saga Ends
 * -----------------------*/

/** Creating Store Starts
 * -----------------------*/
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    loginReducer,
  }),
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);
/** Creating Store Ends
 * -----------------------*/

/**
 * App Class Starts Here
 * -------------------------
 */
class Master extends Component {
  render() {
    return (
      <Provider store={store}>
        <Auth />
      </Provider>
    );
  }
}
export default Master;
/**
 * App Class Starts Here
 * -------------------------
 */

/**
 * SplashScreen Class Ends Here
 * -------------------------
 */
class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.splash}>
        <ActivityIndicator />
      </View>
    );
  }
}
/**
 * SplashScreen Class Ends Here
 * -------------------------
 */

/**
 * Login Class Starts Here
 * -------------------------
 */
class Login extends Component {
  componentDidMount() {
    store.subscribe(() => {
      const {loginReducer} = store.getState();
      this.setState({
        loading: loginReducer.loading,
      });
    });
  }

  state = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  };
  render() {
    const {email, password, loading} = this.state;
    return (
      <>
        <View style={styles.main}>
          <View style={styles.inputUpper}>
            <TextInput
              style={styles.input}
              placeholder={'Email'}
              onChangeText={value => this.setState({email: value})}
              value={email}
            />
          </View>
          <View style={styles.inputUpper}>
            <TextInput
              style={styles.input}
              placeholder={'Password'}
              secureTextEntry
              onChangeText={value => this.setState({password: value})}
              value={password}
            />
          </View>

          <Button
            title="Sign In"
            onPress={() =>
              store.dispatch({
                type: types.LOGIN,
                payload: {
                  email,
                  password,
                },
              })
            }
          />
        </View>
        {loading ? (
          <View style={styles.loadingMain}>
            <SplashScreen />
          </View>
        ) : null}
      </>
    );
  }
}
/**
 * Login Class Ends Here
 * -------------------------
 */

/**
 * Home Class Starts Here
 * -------------------------
 */
class Home extends Component {
  render() {
    return (
      <>
        <View style={styles.main}>
          <Text>This my home</Text>
          <Button
            title="Logout"
            onPress={() =>
              store.dispatch({
                type: types.LOGOUT,
              })
            }
          />
        </View>
      </>
    );
  }
}

/**
 * Home Class Ends Here
 * -------------------------
 */

class Auth extends Component {
  state = {user: null};
  componentDidMount() {
    store.subscribe(() => {
      const {loginReducer} = store.getState();
      this.setState({
        user: loginReducer.user,
      });
    });
  }

  render() {
    const {user} = this.state;

    if (user) return <Home />;
    return <Login />;
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0,0,0,.1)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingMain: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 111,
    flex: 1,
    width,
    height,
  },
  inputUpper: {
    width,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.2)',
    marginHorizontal: 10,
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
  },

  splash: {
    backgroundColor: 'rgba(0,0,0,.1)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
