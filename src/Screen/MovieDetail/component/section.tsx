import React from 'react'
import { View, Text } from 'react-native'
import { Isection } from '../../../Interfaces'
import {styles} from '../style'



export default function section({section,content}: Isection) {
    return (
        <View style={{marginVertical:4}}>
            <Text style={styles.section}>{section}:</Text>
            <Text style={styles.sectionText}>{content}</Text>
        </View>
    )
}
