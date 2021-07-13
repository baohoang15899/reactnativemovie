import React from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import Header from '../../Component/Auth/Header';
import {darkMode} from './style';
import Google from 'react-native-vector-icons/AntDesign';
import Apple from 'react-native-vector-icons/AntDesign';
import Block from '../../Component/Auth/OptionBlock';
import Input from '../../Component/Auth/Input';
import FBtn from '../../Component/Auth/LinearBtn';

export default function Index() {
  return (
    <View style={darkMode.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header title="Sign up" />
        <View style={darkMode.option}>
          <Text style={darkMode.textOption}>
            Sign up with one of the following options
          </Text>
          <View style={darkMode.block}>
            <Block icon={<Google name="google" size={20} color="#fff" />} />
            <Block icon={<Apple name="apple1" size={20} color="#fff" />} />
          </View>
        </View>
        <View style={darkMode.inputGroup}>
          <Input title="Name" placeholder="name" />
          <Input title="Email" placeholder="email" />
          <Input title="Password" placeholder="password" />
        </View>
        <View />
        <FBtn btn="Create Account" />
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'center', color: '#fff', fontSize: 16}}>
            Already have an account?{' '}
            <Text style={{fontWeight: 'bold'}}>Login</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
