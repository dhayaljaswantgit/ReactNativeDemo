import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Notifications extends Component {
  render() {
    return (
      <>
        <View style={styles.main}>
          <Text>This my Notifications</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0,0,0,.1)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
