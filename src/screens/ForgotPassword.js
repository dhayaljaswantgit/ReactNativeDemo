import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';

import {connect} from 'react-redux';
import {initLogin} from '../store/actions/loginAction';

import {Input} from '../components/Input';
import SplashScreen from './SplashScreen';
import STYLES from '../style';

class ForgotPassword extends Component {
  state = {
    email: 'eve.holt@reqres.in',
  };

  render() {
    const {email} = this.state;
    const {doLogin, loading} = this.props;

    return (
      <>
        <View style={styles.main}>
          <Input
            placeholder="Enter your email"
            onChange={value => this.setState({email: value})}
            value={email}
          />
          <Button
            title="Send Link"
            onPress={() => {
              // add forgot password Action here
              // doLogin(this.state)
            }}
          />
          <Button
            title="Go back to login"
            onPress={() => this.props.navigation.goBack()}
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
})(ForgotPassword);

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0,0,0,.1)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
