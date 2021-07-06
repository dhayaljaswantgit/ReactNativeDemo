import React, {Component} from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-community/async-storage';

import SplashScreen from './SplashScreen';
import {setUserData} from '../store/actions/loginAction';
import STYLES from '../style';

import {connect} from 'react-redux';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import TabPage from './TabPage';
import ForgotPassword from './ForgotPassword';
import Notifications from './Notifications';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
class Auth extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    AsyncStorage.getItem('userData')
      .then(data => {
        if (data) {
          try {
            this.props.setUserData(JSON.parse(data));
          } catch (e) {}
        }
        this.setState({loading: false});
      })
      .catch(() => {
        this.setState({loading: false});
      });
  }

  render() {
    const {user} = this.props;
    const {loading} = this.state;

    if (loading) {
      return (
        <View style={STYLES.loadingMain}>
          <SplashScreen />
        </View>
      );
    }

    return (
      <NavigationContainer>
        {user ? (
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomePage} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="TabPage" component={TabPage} />
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Login"
              component={Login}
            />
            <Stack.Screen name="Forgot Password" component={ForgotPassword} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginReducer.user,
  };
};

export default connect(mapStateToProps, {
  setUserData,
})(Auth);

function HomePage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}
