import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export class Button extends Component {
  render() {
    const {title = 'Button', onPress} = this.props;
    return (
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'rgba(0,0,255 ,.3)',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 50,
  },
  btnText: {
    fontSize: 16,
  },
});
