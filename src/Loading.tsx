import React from 'react'
import { View, Text, Modal, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { WaveIndicator as Load} from 'react-native-indicators'
import {COLOR} from '../src/GlobalStyle'
export default function Loading() {
    const loading = useSelector(state => state.auth.loading)

    return (
        <Modal visible={loading} transparent={true}  animationType="fade">
            <View style={style.container}>
                <Load color={COLOR.RED} size={70} />
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgba(24,26,24, 0.8)'
    }
})
