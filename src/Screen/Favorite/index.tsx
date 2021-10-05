import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import HeaderNoBack from '../../Component/HeaderNoBack'
import styles from './styles'


export default function index() {
    const data = useSelector(state => state.auth.user)
    const { listResults } = data
    console.log(listResults);    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderNoBack title='My list' />
            <View style={styles.container}>
                {listResults?.list?.length > 0 ? 
                <View></View>
                :
                <Text style={styles.title}>Your favorite list is empty</Text>   
                }
            </View>
        </SafeAreaView>
    )
}
