import { StyleSheet } from "react-native";
import { COLOR } from "../../GlobalStyle";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.BACKGROUNG,
        flex: 1,
        paddingHorizontal:15
    },
    btn:{
        width:'100%',
        marginBottom:15
    },
    btnSubmit:{
        width:'100%',
        marginBottom:35
    },
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor:'#383838',
        borderBottomWidth:1,
        paddingVertical:20,
        paddingHorizontal:15,
        backgroundColor: COLOR.LIGHTBLACK,
    },
    headerText:{
        fontFamily: 'Roboto-Bold',
        color: '#fff',
        fontSize: 16,
        letterSpacing: 1,
        marginLeft: 18,
    },
    avatar: {
        borderWidth:2,
        borderColor:'#808080',
        borderRadius:999,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:80,
        alignSelf:'center',
    },
    image: {
        borderRadius: 9999,
        width: '100%',
        height: '100%'
    },
    camera: {
        position: 'absolute',
        bottom: 15,
        right: 0,
        padding: 8,
        backgroundColor: COLOR.LIGHTBLACK,
        borderRadius: 999
    },
    userName:{
        color:COLOR.PINK,
        fontSize:14,
        fontFamily: 'Roboto-Regular',
        marginTop:10,
        textAlign:'center',
        backgroundColor: COLOR.LIGHTBLACK,
        paddingVertical:8,
        borderRadius:12,
        width:'52%',
        alignSelf:'center'
    },
    textInput:{
        width:'100%',
        paddingHorizontal:15,
        borderRadius:12,
        backgroundColor:'#101010',
        color:'#fff'
    }
})

export default styles