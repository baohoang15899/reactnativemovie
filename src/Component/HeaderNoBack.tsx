import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLOR } from '../GlobalStyle'
import { IHeaderNoBack } from '../Interfaces'

export default function HeaderNoBack({title}:IHeaderNoBack) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#383838',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: COLOR.LIGHTBLACK,
    },
    headerText: {
        fontFamily: 'Roboto-Bold',
        color: '#fff',
        fontSize: 16,
        letterSpacing: 1,
        textAlign:'center'
    },
})