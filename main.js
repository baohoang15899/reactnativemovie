import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Auth from './src/Navigation/AuthStack'
import Home from './src/Navigation/HomeStack'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER } from './src/Screen/Auth/constants';
import firestore from '@react-native-firebase/firestore';
import Loading from './src/Loading'
export default function main() {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const saveId = async(id) => {
        try {
            await AsyncStorage.setItem('userId', id)
            // dispatch({type:GET_USER,payload:{id:id}})
        } catch (error) {
            console.log(error);
        }
    }

    const removeId = async() =>{
        try {
            const userId = await AsyncStorage.getItem('userId')
            if (userId) {
                await AsyncStorage.removeItem('userId')
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log(user);
        auth().onAuthStateChanged((info)=>{
            if (info) {
                saveId(info.uid)
                dispatch({type:GET_USER,payload:{id:info.uid}})
            }
            else{
                removeId()
            }
        })
        const getId = async() => {
            const id = await AsyncStorage.getItem('userId')
            if (id && !user) {
                dispatch({type:GET_USER,payload:{id:id}})
            }
        }
        // const check = async()=>{
        //     const user = await firestore().collection('user').doc('ZnSDqz7TIZepW307i1dmktRuDD53').get();
        //     const data = user.data();
        //     console.log(data.name + ' data ');
        //     return {id, ...data};
        // }
        // check()
        // const clear = async()=>{
        //     await AsyncStorage.clear()
        // }
        // clear()
        getId()
//         auth()
//   .signOut()
//   .then(() => console.log('User signed out!'));
    }, [])



    return (
        <>
            <Loading/>
            {user ? <Home/> : <Auth/> }
        </>
    )
}
