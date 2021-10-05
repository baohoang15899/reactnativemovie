import { Dimensions, StyleSheet } from "react-native";
import { COLOR, FONT } from "../../GlobalStyle";

const {width,height} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOR.BACKGROUNG
    },
    imgBg:{
        width:'100%',
        zIndex:2,
        flex:1,
    },
    backCover:{
        position:'absolute',
        backgroundColor: 'rgba(0,0,0, 0.6)',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex:1
    },
    content:{
        padding:15,
        zIndex:3
    },
    sectionContainer:{ 
        flex: 1, 
        paddingHorizontal: 15,
        paddingVertical:5 
    },
    overviewText:{
        fontSize:FONT.SMALL,
        color:COLOR.PINK
    },
    section:{
        fontSize:FONT.TEXT,
        color:COLOR.PINK,
        fontFamily:'Roboto-Bold',
    },
    genresText:{
        fontSize:FONT.SMALL,
        color:COLOR.PINK,
        paddingHorizontal:8,
        paddingVertical:5,
        backgroundColor:COLOR.LIGHTBLACK,
        borderRadius:8,
        marginVertical:2,
        marginHorizontal:5
    },
    title:{
        fontFamily:'Roboto-Bold',
        fontSize:FONT.TITLE,
        color:COLOR.PINK,
        textAlign:'center',
        textTransform:'uppercase'
    },
    sectionTitle:{
        fontFamily:'Roboto-Bold',
        fontSize:FONT.TITLE,
        color:COLOR.PINK,
        textTransform:'uppercase'
    },
    genres:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:width*1
    },
    date:{
        fontFamily:'Roboto-Bold',
        fontSize:FONT.TEXT,
        color:COLOR.PINK,
    },
    image:{
        alignSelf:'center',
        borderRadius:14,
        width:width*0.44,
        height:height*0.36,
        marginBottom:12
    },
    sectionText:{
        fontSize:FONT.TEXT,
        color:COLOR.PINK,
        marginTop:4,
        fontFamily:'Roboto-Regular'
    }
})