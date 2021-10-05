import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import HeaderNoBack from '../../Component/HeaderNoBack'
import styles from './styles'


export default function index() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderNoBack title='My list' />
            <View style={styles.container}>
            </View>
        </SafeAreaView>
    )
}
