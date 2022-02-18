import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";
import { FONTS } from "../../../themes/fonts";

export const styles = StyleSheet.create({
    wrapperButton:{
        width:'100%',
        height:60,
        marginVertical:40,
        elevation:3,

        borderWidth:1,
        borderRadius:3,
        borderColor:COLORS.light,
        backgroundColor:COLORS.secondary,

        flexDirection:'row',
        alignItems:'center',

        shadowColor:COLORS.black,
        shadowOpacity:0.1,
        shadowOffset: { width:0, height:2 }
    },
    areaIcon:{
        width:'20%',
        height:60,
        borderRightWidth:1,
        borderColor:COLORS.light,
        justifyContent:'center',
        alignItems:'center'
    },
    areaTitle:{
        width:'80%',
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontFamily:FONTS.regular,
        fontSize:14,
        fontWeight:'bold',
        color:COLORS.gray
    },
    image:{
        width:30,
        height:30,
        resizeMode:'contain'
    }
})