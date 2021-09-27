import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, Image, Pressable, Dimensions, StyleSheet, FlatList } from 'react-native'
import { COLOR, FONT } from '../../../GlobalStyle'
import { imgUrl } from '../../../ImgUrl/url'
import { HomeScreen } from '../../../Navigation/Stack'

const { width, height } = Dimensions.get('window')

export default function SearchResults({ search }: any) {
    const navigate = useNavigation()
    const handlePress = (type: any, id: any) => {
        if (type === 'movie' || type === 'tv') {
            navigate.navigate(HomeScreen.MOVIE_DETAIL, { id: id, type: type })
        }
    }
    const renderItem = ({ item, index }: any) => {
        console.log(JSON.stringify(item));
        return (
            <View style={{ width: '50%' }}>
                <Pressable style={{ padding: 5 }} onPress={() => handlePress(item.media_type, item.id)}>
                    {item.media_type === "tv" &&
                        <Image style={styles.image}
                            source={item.poster_path ?
                                { uri: `${imgUrl.POSTER}${item.poster_path}` } :
                                require('../../../../assets/image/notfound.jpg')} />
                    }
                    {item.media_type === "movie" &&
                        <Image style={styles.image}
                            source={item.poster_path ?
                                { uri: `${imgUrl.POSTER}${item.poster_path}` } :
                                require('../../../../assets/image/notfound.jpg')} />
                    }
                    {item.media_type === 'person' &&
                        <Image style={styles.image}
                            source={item.profile_path ?
                                { uri: `${imgUrl.ACTOR_PROFILE}${item.profile_path}` } :
                                require('../../../../assets/image/notfound.jpg')} />
                    }
                    <Text style={styles.title}>
                        {item.media_type === 'tv' && item.name}
                        {item.media_type === 'movie' && item.original_title}
                        {item.media_type === 'person' && item.name}
                    </Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {search?.length > 0 ?
                <FlatList
                    horizontal={false}
                    data={search}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
                :
                <Text style={styles.title}>Can't found anything</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5,
    },
    image: {
        height: height * 0.3,
        borderRadius: 12,
        width: '100%'
    },
    title: {
        fontSize: FONT.TEXT,
        color: COLOR.PINK,
        marginTop: 4,
        fontFamily: 'Roboto-Regular',
        width: '100%',
        textAlign: 'center'
    }
})