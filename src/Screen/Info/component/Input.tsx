import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { COLOR } from '../../../GlobalStyle'
import { Iinput } from '../../../Interfaces'



export default function Input({title,editable,value,placeholder,textChanged}:Iinput) {
    return (
        <View style={{width:'100%',marginTop:10}}>
            <Text style={styles.title}>{title}</Text>
            <TextInput onChangeText={textChanged} placeholderTextColor={COLOR.PLACEHOLDER}  editable={editable} placeholder={placeholder} style={styles.textInput}  value={value}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput:{
        width:'100%',
        paddingHorizontal:15,
        borderRadius:12,
        backgroundColor:'#202020',
        color:'#fff'
    },
    title:{
        color:'#fff',
        fontFamily:'Roboto-Regular',
        marginVertical:7,
        fontSize:12,
        marginLeft:5
    }
})
