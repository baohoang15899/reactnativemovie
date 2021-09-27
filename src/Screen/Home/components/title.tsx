import React from 'react'
import { View, Text } from 'react-native'

interface type {
    title:string,
    style:object
}

export default function title({title,style}:type) {
    return (
        <Text style={style}>{title}</Text>
    )
}
