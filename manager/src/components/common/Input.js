import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    height: 40,
    width: 100,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23, // height between each line of text
    flex: 2 // (siblings component) total flex (2+1 = 3) 2/3 will be allocated to input
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1 // (siblings component) total flex (2+1 = 3) 1/3 will be allocated to label
  },
  containerStyle: {
    height: 40,
    flex: 1, // to fit all available space
    flexDirection: 'row',
    alignItems: 'center'
  }
};
export { Input };
