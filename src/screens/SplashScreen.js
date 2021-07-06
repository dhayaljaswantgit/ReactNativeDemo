import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.main}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0,0,0,.1)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
