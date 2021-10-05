import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Pressable, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { COLOR, FONT } from '../../../GlobalStyle'
import { imgUrl } from '../../../ImgUrl/url'
import { HomeScreen } from '../../../Navigation/Stack'


const { width, height } = Dimensions.get('window')


export default function item({actors}:any) {
    console.log(actors);
    
    const navigate = useNavigation()
    const renderItem = ({ item,index }) => {
        return ( <View style={index !== 0 ? {width:width*0.43,marginLeft:12} : {width:width*0.43}}>
            <Pressable>
                <Image style={styles.image}
                    source={item.profile_path ?
                        { uri: `${imgUrl.ACTOR_PROFILE}${item.profile_path}` }
                        :
                        require('../../../../assets/image/notfound.jpg')} />
                <Text style={styles.title}>{item.name}</Text>
            </Pressable>
        </View>)
    }

    return (
        <View style={styles.container}>
            {actors?.length > 0 ?            
            <FlatList
                horizontal
                data={actors}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            :
            <Text style={styles.title}>Actors infomation not found</Text>
        }
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
        fontFamily:'Roboto-Regular'
    }
})