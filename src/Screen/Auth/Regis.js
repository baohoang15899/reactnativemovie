import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Alert } from 'react-native';
import Header from '../../Component/Auth/Header';
import { darkMode } from './style';
import Google from 'react-native-vector-icons/AntDesign';
import Apple from 'react-native-vector-icons/AntDesign';
import Block from '../../Component/Auth/OptionBlock';
import Input from '../../Component/Auth/Input';
import FBtn from '../../Component/Auth/LinearBtn';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { LOG_IN } from './constants';

export default function Index() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const dispatch = useDispatch()

    const handleLogin = () =>{
        if (email.length > 0 && pass.length > 0) {
            dispatch({type:LOG_IN,payload:{email,pass}})
        }
        else {
            Alert.alert('Error', 'Dont leave the textbox empty')
        }
    }

    return (
        <View style={darkMode.container}>
            <ScrollView keyboardShouldPersistTaps='always' contentContainerStyle={{ flexGrow: 1 }}>
                <Header title="Log in" />
                <View style={darkMode.option}>
                    <Text style={darkMode.textOption}>
                        Sign up with one of the following options:
                    </Text>
                    <View style={darkMode.block}>
                        <Block icon={<Google name="google" size={20} color="#fff" />} />
                        <Block icon={<Apple name="apple1" size={20} color="#fff" />} />
                    </View>
                </View>
                <View style={darkMode.inputGroup}>
                    <Input title="Email" placeholder="email" onPress={e => setEmail(e)} />
                    <Input title="Password" placeholder="password" onPress={e => setPass(e)} ser={true} />
                </View>
                <FBtn btn="Login" onPress={() =>handleLogin()} />
                <View style={{ flex: 1, marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>
                        Don't have an account?{' '}
                        <Text
                            onPress={() => navigation.navigate('Signup')}
                            style={{ fontWeight: 'bold' }}>
                            Sign up
                        </Text>
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}
