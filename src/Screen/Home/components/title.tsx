import React from 'react'
import { View, Text } from 'react-native'
import { categoryTitle } from '../../../Interfaces'



export default function title({title,style}:categoryTitle) {
    return (
        <Text style={style}>{title}</Text>
    )
}
