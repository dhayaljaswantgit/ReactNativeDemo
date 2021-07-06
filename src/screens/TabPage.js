import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Header} from '../components/Header';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function NewPage() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>NewPage!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default class TabPage extends Component {
  render() {
    return (
      <>
        <Header navigation={this.props.navigation} title="Tab Page" />
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="NewTab" component={NewPage} />
        </Tab.Navigator>
      </>
    );
  }
}
