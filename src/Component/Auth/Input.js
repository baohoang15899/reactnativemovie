import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {darkMode, lightMode} from './style';

export default function Input({placeholder, title, onPress, ser}) {
  const [focus, setFocus] = useState(false);
  return (
    <View style={{marginTop: 10}}>
      <Text style={darkMode.inputTitle}>{title}</Text>
      <View style={[darkMode.input, focus ? darkMode.borderInput : '']}>
        <TextInput
          style={{color: 'white'}}
          onChangeText={onPress}
          onFocus={() => setFocus(true)}
          placeholder={placeholder}
          placeholderTextColor="#9a9a9a"
          onBlur={() => setFocus(false)}
          secureTextEntry={ser ? true : false}
        />
      </View>
    </View>
  );
}
