import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { moviePopular } from '../../Api/Service'
import { COLOR, FONT } from '../../GlobalStyle'
import { GET_MOVIE, GET_SEARCH_RESULTS, GET_TV } from './constants'
import Item from './components/item'
import Title from './components/title'
import { useNavigation } from '@react-navigation/native'
import { HomeScreen } from '../../Navigation/Stack'
import SearchResults from './components/SearchResults'

export default function index() {

    const user = useSelector(state => state.auth.user)
    const { movie, tv, searchResults } = useSelector(state => state.home)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        dispatch({ type: GET_MOVIE })
        dispatch({ type: GET_TV })
    }, [])

    useEffect(() => {
        //using debounce
        const debounce = setTimeout(() => {
            dispatch({ type: GET_SEARCH_RESULTS, payload: { keyword: keyword } })
        }, 500);
        return () => clearTimeout(debounce)
    }, [keyword])

    const handleSearch = (e: any) => {
        const Reg = /^\s/
        setKeyword(e.replace(Reg, ""))
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.header} >
                <Text style={style.headerText}>Movie Dictionary</Text>
                <Text onPress={() => navigation.navigate(HomeScreen.INFO)} style={style.userName}>{user.name}</Text>
            </View>
            <View style={style.searchContainer}>
                <TextInput value={keyword} onChangeText={(e) => handleSearch(e)} style={style.input} placeholder="Search" placeholderTextColor="white" />
            </View>
            <View style={style.body}>
                {keyword.length < 1 ?
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                        <Title style={style.categoryTitle} title="Popular Movies" />
                        <Item type="movie" movie={movie} />
                        <Title style={style.categoryTitle} title="Popular Tv shows" />
                        <Item type="tv" movie={tv} />
                    </ScrollView>
                    :
                    <SearchResults search={searchResults?.results} />
                }
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: COLOR.BACKGROUNG,
        flex: 1
    },
    searchContainer: {
        paddingHorizontal: 15,
        marginBottom: 10,
        marginTop: 15
    },
    input: {
        width: '100%',
        paddingHorizontal: 15,
        borderRadius: 12,
        backgroundColor: '#202020',
        color: '#fff'
    },
    categoryTitle: {
        fontSize: FONT.TITLE,
        color: COLOR.PINK,
        marginTop: '3%',
        fontFamily: 'Roboto-Bold',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#383838',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: COLOR.LIGHTBLACK,
    },
    body: {
        paddingHorizontal: 15,
        marginBottom: '2%',
        flex: 1,
        backgroundColor: COLOR.BACKGROUNG,
    },
    headerText: {
        fontSize: FONT.HEADER,
        color: COLOR.PINK,
        fontFamily: 'Roboto-Bold',
    },
    userName: {
        fontSize: FONT.TEXT,
        color: COLOR.PINK,
        backgroundColor: '#484848',
        fontFamily: 'Roboto-Medium',
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 8
    }
})
