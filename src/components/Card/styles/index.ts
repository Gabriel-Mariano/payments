import { StyleSheet } from "react-native";
import { FONTS } from "../../../themes/fonts";
import { COLORS } from "../../../themes/colors";

const styles = StyleSheet.create({
    container:{
        width:'100%',
        marginVertical:10,
        paddingVertical:15,
        paddingHorizontal:20,
        backgroundColor:COLORS.white,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

        elevation:1,
        shadowColor:COLORS.dark,
        shadowOffset:{ width:0, height:2 },
        shadowOpacity:0.1,
    },
    title:{
        fontFamily:FONTS.bold,
        fontSize:16,
        marginBottom:5
    },
    descriptionDate:{
        fontFamily:FONTS.regular,
        fontSize:14,
        color:COLORS.gray
    },
    closeButton:{
        padding:2,
        backgroundColor:COLORS.danger,
        alignSelf:'flex-end',
        marginTop:-20,
        marginRight:-15,
        borderRadius:15,
    },
    totally:{
        fontFamily:FONTS.bold,
        fontSize:16,
        marginRight:15
    }
});

export { styles };

