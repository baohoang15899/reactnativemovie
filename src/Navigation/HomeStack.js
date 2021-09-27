import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { LOG_OUT } from '../Screen/Auth/constants'
import  {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './Stack'
import Info from '../Screen/Info/index'
import Home from '../Screen/Home/index'
import HomeTab from './Home/HomeTab'
import UpdateProfile from '../Screen/Info/UpdateProfile'
import Detail from '../Screen/MovieDetail/index'
const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown:false}}
                initialRouteName={HomeScreen.BASE}>
                <Stack.Screen name={HomeScreen.BASE} component={HomeTab} />
                <Stack.Screen name={HomeScreen.INFO} component={Info} />
                <Stack.Screen name={HomeScreen.UPDATE_PROFILE} component={UpdateProfile} />
                <Stack.Screen name={HomeScreen.MOVIE_DETAIL} component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
