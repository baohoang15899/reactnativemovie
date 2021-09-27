import React from 'react'
import { View, Text } from 'react-native'

interface Ierror {
    title:string
}

export default function Error({title}:Ierror) {
    return (
        <Text style={{
            fontSize:12,
            fontFamily:'Roboto-Regular',
            color:"#FE5A59",
            marginTop:3,
            marginLeft:5
        }}>{title}</Text>
    )
}
