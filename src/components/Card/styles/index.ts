import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";
import { FONTS } from "../../../themes/fonts";

const styles = StyleSheet.create({
    container:{
        width:300,
        height:60,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:COLORS.dark,

        borderRadius:10,
    },
    text:{
        fontFamily:FONTS.regular,
        color:COLORS.white,
        textAlign:'center',
    },
    bold:{
        fontFamily:FONTS.bold,
    }
});

export { styles };