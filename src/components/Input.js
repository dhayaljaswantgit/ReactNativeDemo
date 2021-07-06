import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export class Input extends Component {
  render() {
    const {
      placeholder,
      isPassword = false,
      onChange,
      value = null,
    } = this.props;
    return (
      <View style={styles.main}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={isPassword}
          onChangeText={onChange}
          value={value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
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
});
