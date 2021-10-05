import { StyleSheet } from "react-native";
import { COLOR, FONT } from "../../GlobalStyle";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.BACKGROUNG,
        flex: 1,
        paddingHorizontal:15
    },
    title:{
        marginTop:10,
        fontFamily:'Roboto-Bold',
        fontSize:FONT.TITLE,
        color:COLOR.PINK,
        textAlign:'center',
        textTransform:'uppercase'
    },
}) 

export default styles