import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLOR } from '../../GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';
import Input from './component/Input'
import Btn from '../../Component/Btn'
import { LOG_OUT, UPDATE_AVATAR, UPDATE_PROFILE } from '../Auth/constants';
import { useNavigation } from '@react-navigation/native';
import { HomeScreen } from '../../Navigation/Stack';
import {gallery} from '../../Camera/Index'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import UpdateProfile from './UpdateProfile';

export default function SettingsScreen() {
    const data = useSelector(state => state.auth.user)
    const { name, email, age, avatar,id } = data
    const dispatch = useDispatch()
    const navigate = useNavigation()
    const [image,setImage] = useState<object>({})

    const launch = () =>{
        launchImageLibrary({mediaType: 'photo'}, props => {
            if(props.assets){
                dispatch({type:UPDATE_AVATAR,payload:{id:id,image:props.assets[0]}})
            }else{
                console.log("Turn off camera");
            }
          })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{name}'s info</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.avatar}>
                    <Image style={styles.image}   source={ avatar ? {uri:avatar} : require('../../../assets/image/user.png')  } />
                    <Pressable style={styles.camera} onPress={() => launch()}>
                    <Icon name="camera" size={15} color={COLOR.PINK} />
                    </Pressable>
                </View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userName}>{email}</Text>
                {age && <Text style={styles.userName}>{age} years old</Text>}
                <View style={{ flex: 1 }}></View>
                <Btn onPress={()=>navigate.navigate(HomeScreen.UPDATE_PROFILE)} title="Update profile" optionalStyle={styles.btn}/>
                <Btn onPress={()=>dispatch({type:LOG_OUT})} title="Log out" optionalStyle={styles.btnSubmit}/>
            </View>
        </SafeAreaView>
    );
}

