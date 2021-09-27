import React, { useEffect, useMemo, useState } from 'react'
import { View, Text, SafeAreaView, ImageBackground, Image, ScrollView, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './style'
import { GET_CAST, GET_DETAIL, GET_RECOMMENDATION } from './constants'
import Header from '../../Component/Header'
import Section from './component/section'
import { imgUrl } from '../../ImgUrl/url'
import Actor from './component/actor'
import Item from '../Home/components/item'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/AntDesign'

export default function index({ route }) {
    const { id, type } = route.params
    const dispatch = useDispatch()
    const data = useSelector(state => state.movieDetail.detail)
    const crewInfo = useSelector(state => state.movieDetail.cast)
    const recommend = useSelector(state => state.movieDetail.recommend)
    const [favorite,setFavorite] = useState<Boolean>(false)
    const { backdrop_path, poster_path, genres, overview, vote_average } = data
    const { cast, crew } = crewInfo
    const { results } = recommend
    const navigation = useNavigation()

    const handleData = () => {
        dispatch({ type: GET_DETAIL, payload: { id: id, type: type } })
        dispatch({ type: GET_CAST, payload: { id: id, type: type } })
        dispatch({ type: GET_RECOMMENDATION, payload: { id: id, type: type } })
    }

    // call this function when go to previous page
    useEffect(() => {
        const data = navigation.addListener('focus', () => {
            handleData()
        })
        return data
    }, [])

    // useEffect(() => {
    //     handleData()
    // }, [])

    const handleFavorite = () =>{
        setFavorite(!favorite)
    }

    return useMemo(() => (
        <SafeAreaView style={styles.container}>
            {data &&
                <View style={styles.container}>
                    <Header title={type === 'movie' ? data?.original_title : data?.name} />
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                        <ImageBackground resizeMode="cover" style={styles.imgBg} source={{ uri: backdrop_path && `${imgUrl.IMG_BG}${backdrop_path}` } as any}>
                            <View style={styles.backCover}></View>
                            <View style={styles.content}>
                                <Image style={styles.image} resizeMode="cover" source={{ uri: `${imgUrl.POSTER}${poster_path}` }} />
                                <Text style={styles.title} >
                                    {type === 'movie' ?
                                        data.original_title :
                                        data.name}
                                </Text>
                                <Section section='Release date'
                                    content={type === 'movie' ?
                                        data?.release_date :
                                        data?.first_air_date} />
                                <Section section='Time'
                                    content={type === 'movie' ?
                                        `${parseInt(data?.runtime / 60 as any)}h ${data?.runtime % 60}m` :
                                        `${parseInt(data?.episode_run_time && data.episode_run_time[0] / 60 as any)}h ${data?.episode_run_time && data.episode_run_time[0] % 60}m/ep`} />
                                <Section section='Genres'
                                    content={<View style={styles.genres}>
                                        {genres?.map((item: any, i: any) => {
                                            return <Text
                                                style={i !== 0 ? styles.genresText : [styles.genresText, { marginLeft: 0 }]}
                                                key={item.id}>
                                                {item.name}
                                            </Text>
                                        })}
                                    </View>} />
                                <Section section='Score'
                                    content={vote_average && vote_average}
                                />
                                <Section section='Overview'
                                    content={overview && overview}
                                />
                                <Section section='Favorite'
                                    content={
                                        <Pressable onPress = {()=>handleFavorite()}>
                                            <Icon name={favorite ? 'heart' : 'hearto'} color="#e50000" size={35} />
                                        </Pressable>
                                    }
                                />
                            </View>
                        </ImageBackground>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Actors</Text>
                            <Actor actors={cast} />
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Recommendations</Text>
                            {results?.length > 1 ?
                                <Item type={type} movie={results} />
                                :
                                <Text style={styles.sectionText}>Recommendations are not found</Text>
                            }
                        </View>
                    </ScrollView>
                </View>
            }
        </SafeAreaView>
    ), [id, data, crewInfo, recommend,favorite])
}
