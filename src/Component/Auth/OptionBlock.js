import React from 'react';
import {View, Text} from 'react-native';
import {darkMode, lightMode} from './style';

export default function OptionBlock({icon}) {
  return <View style={darkMode.childBlock}>{icon}</View>;
}
