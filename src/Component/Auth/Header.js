import React from 'react';
import {View, Text} from 'react-native';
import {darkMode, lightMode} from './style';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header({title}) {
  return (
    <View style={darkMode.header}>
      <Icon
        name="chevron-back"
        style={darkMode.headerIcon}
        size={22}
        color="#fff"
      />
      <Text style={darkMode.headerText}>{title}</Text>
    </View>
  );
}
