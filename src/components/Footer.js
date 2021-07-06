import React, {Component} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';

export default class Footer extends Component {
  render() {
    return (
      <SafeAreaView style={styles.main}>
        <Text style={styles.footerText}>This is my Footer</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {},
  footerText: {textAlign: 'center', paddingVertical: 10},
});
