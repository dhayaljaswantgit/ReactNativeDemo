import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';

import {connect} from 'react-redux';
import {initLogin} from '../store/actions/loginAction';

import {Input} from '../components/Input';
import SplashScreen from './SplashScreen';
import STYLES from '../style';

class Login extends Component {
  state = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  };

  render() {
    const {email, password} = this.state;
    const {doLogin, loading} = this.props;

    return (
      <>
        <View style={styles.main}>
          <Input
            placeholder="Enter your email"
            onChange={value => this.setState({email: value})}
            value={email}
          />

          <Input
            placeholder="Enter your password"
            isPassword
            onChange={value => this.setState({password: value})}
            value={password}
          />
          <Button title="Sign In" onPress={() => doLogin(this.state)} />
          <Button
            title="Forgot Password?"
            onPress={() => this.props.navigation.navigate('Forgot Password')}
          />
        </View>
        {loading ? (
          <View style={STYLES.loadingMain}>
            <SplashScreen />
          </View>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loginReducer.loading,
  };
};

export default connect(mapStateToProps, {
  doLogin: initLogin,
})(Login);

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0,0,0,.1)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
