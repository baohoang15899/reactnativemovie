import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Pressable, FlatList } from 'react-native'
import { useDispatch } from 'react-redux'
import index from '..'
import { COLOR, FONT } from '../../../GlobalStyle'
import { imgUrl } from '../../../ImgUrl/url'
import { HomeScreen } from '../../../Navigation/Stack'
import { CLEAR_DATA_DETAIL } from '../../MovieDetail/constants'
const { width, height } = Dimensions.get('window')
export default function item({movie,type }:any) {
    const navigate = useNavigation()
    const dispatch = useDispatch()
    const handlePress = (id:any) => {
        dispatch({type:CLEAR_DATA_DETAIL})
        navigate.push(HomeScreen.MOVIE_DETAIL, { id: id, type: type })
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={index !== 0 ? {width:width*0.43,marginLeft:12} : {width:width*0.43}}>
                <Pressable onPress={() => handlePress(item.id)}>
                    <Image style={styles.image}
                        source={item.poster_path ?
                            { uri: `${imgUrl.POSTER}${item.poster_path}` } :
                            require('../../../../assets/image/notfound.jpg')} />
                    <Text style={styles.title}>{type === 'movie' ? item.original_title : item.name}</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={movie}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical:5
    },
    image: {
        height: height * 0.3,
        borderRadius: 12,
        width:'100%'
    },
    title: {
        fontSize: FONT.TEXT,
        color: COLOR.PINK,
        marginTop: 4,
        fontFamily:'Roboto-Regular',
        width:'100%'
    }
})