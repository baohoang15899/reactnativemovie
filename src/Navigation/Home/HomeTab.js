import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import Home from '../../Screen/Home/index'
import Info from '../../Screen/Info/index'
import MyList from '../../Screen/Favorite/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../Stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLOR } from '../../GlobalStyle'
const Tab = createBottomTabNavigator();

export default function HomePage() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false, tabBarStyle: {
                backgroundColor: COLOR.LIGHTBLACK,
                borderTopColor: "transparent",
            },
            tabBarInactiveTintColor: COLOR.PINK,
            tabBarActiveTintColor: COLOR.RED,
            tabBarLabelStyle: style.label,
            tabBarIconStyle: style.icon,
            tabBarIcon: ({ color }) => {
                switch (route.name) {
                    case HomeScreen.HOME:
                        return <Icon name="home" size={22} color={color} />
                    case HomeScreen.INFO:
                        return <Icon name="user" size={22} color={color} />
                    case HomeScreen.FAVORTIE:
                        return <Icon name="heart" size={22} color={color} />
                    default:
                        break;
                }
            }
        })}>
            <Tab.Screen options={{
                tabBarLabel: 'Home',
            }}
                name={HomeScreen.HOME} component={Home} />
            <Tab.Screen options={{
                tabBarLabel: 'My list',
            }}
                name={HomeScreen.FAVORTIE} component={MyList} />
            <Tab.Screen options={{
                tabBarLabel: 'Profile',
            }}
                name={HomeScreen.INFO} component={Info} />
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