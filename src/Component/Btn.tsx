import React from 'react'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

interface Ibtn {
    onPress:() => void,
    title:string,
    optionalStyle:object
}

export default function Btn({onPress,title,optionalStyle}:Ibtn) {
    return (
        <LinearGradient
        start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.1 }}
        style={[{borderRadius: 10 },optionalStyle]}
        colors={['#db3445', '#ff7878']}>
        <Text
            onPress={onPress}
            style={{
                padding: 15,
                color: '#fff',
                textAlign: 'center',
                fontSize: 18,
            }}>
            {title}
        </Text>
    </LinearGradient>
    )
}
