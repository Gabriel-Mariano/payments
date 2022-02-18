import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";
import { FONTS } from "../../../themes/fonts";

const styles = StyleSheet.create({
    wrapperContentProfile:{
        width:'100%',
        height:'100%',
        paddingHorizontal:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    text:{
        fontFamily:FONTS.regular,
        fontSize:16,
        color:COLORS.white,
    },
    bold:{
        fontFamily:FONTS.bold,
    },
    description:{
        fontFamily:FONTS.regular,
        color:COLORS.white,
        fontSize:12,
        lineHeight:16,
    },
    image:{
        width:60,
        height:60,
        resizeMode:'contain',
        borderRadius:50,
    }
});

export { styles };