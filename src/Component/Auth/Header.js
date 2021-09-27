import React from 'react';
import { View, Text } from 'react-native';
import { darkMode, lightMode } from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title }) {
    const navigate = useNavigation()
    return (
        <View style={darkMode.header}>
            <Icon
                name="chevron-back"
                style={darkMode.headerIcon}
                size={22}
                color="#fff"
                onPress={() => navigate.canGoBack() && navigate.goBack()}
            />
            <Text style={darkMode.headerText}>{title}</Text>
        </View>
    );
}
