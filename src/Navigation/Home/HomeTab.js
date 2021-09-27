import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import Home from '../../Screen/Home/index'
import Info from '../../Screen/Info/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../Stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLOR } from '../../GlobalStyle'
const Tab = createBottomTabNavigator();

export default function HomePage() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarStyle: {
                backgroundColor: COLOR.LIGHTBLACK,
                borderTopColor: "transparent",
            }, 
            tabBarInactiveTintColor: COLOR.PINK,
            tabBarActiveTintColor: COLOR.RED,
        }}>
            <Tab.Screen options={{
                tabBarLabel: 'Home',
                tabBarLabelStyle: style.label,
                tabBarIconStyle: style.icon,
                tabBarIcon: ({ color }) => (
                    <Icon name="home" size={22} color={color} />
                ),
            }} name={HomeScreen.HOME} component={Home} />
            <Tab.Screen options={{
                tabBarLabel: 'Profile',
                tabBarLabelStyle: style.label,
                tabBarIconStyle: style.icon,
                tabBarIcon: ({ color }) => (
                    <Icon name="user" size={22} color={color} />
                )
            }} name={HomeScreen.INFO} component={Info} />
        </Tab.Navigator>
        // <Home/>
    )
}

const style = StyleSheet.create({
    label: {
        marginBottom: 5,
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
    },
    icon: {
        marginTop: 5
    }
})