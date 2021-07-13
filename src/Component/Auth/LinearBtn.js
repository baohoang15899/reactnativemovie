import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {darkMode, lightMode} from './style';
export default function LinearBtn({btn}) {
  return (
    <View style={darkMode.btn}>
      <LinearGradient
        style={{borderRadius: 10}}
        colors={['#5f0a87', '#a4508b']}>
        <Text
          style={{
            padding: 15,
            color: '#fff',
            textAlign: 'center',
            fontSize: 18,
          }}>
          {btn}
        </Text>
      </LinearGradient>
    </View>
  );
}
