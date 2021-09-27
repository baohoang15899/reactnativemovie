import React from 'react'
import { View, Text } from 'react-native'
import {styles} from '../style'

interface Isection {
    section:string,
    content:any
}

export default function section({section,content}: Isection) {
    return (
        <View style={{marginVertical:4}}>
            <Text style={styles.section}>{section}:</Text>
            <Text style={styles.sectionText}>{content}</Text>
        </View>
    )
}
