import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {darkMode, lightMode} from './style';

export default function Input({placeholder, title}) {
  return (
    <View style={{marginTop: 10}}>
      <Text style={darkMode.inputTitle}>{title}</Text>
      <View style={darkMode.input}>
        <TextInput placeholder={placeholder} placeholderTextColor="#9a9a9a" />
      </View>
    </View>
  );
}
