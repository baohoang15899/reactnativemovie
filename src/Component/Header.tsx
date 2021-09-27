import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import { COLOR, FONT } from '../GlobalStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

interface Iheader {
    title: string,
    onPress: () => void
}


export default function Header({ title}) {
    const navigate = useNavigation()
    return (
        <View style={styles.header}>
        <Pressable onPress={() => navigate.canGoBack() && navigate.goBack()}>
            <View>
                <Icon name="chevron-left" size={20} color="#fff" />
            </View>
        </Pressable>
        <Text style={styles.title}>{title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#383838',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: '#202020'
    },
    title: {
        marginLeft:15,
        fontSize: FONT.TEXT,
        color: COLOR.PINK,
        fontFamily: 'Roboto-Bold',
    }
})