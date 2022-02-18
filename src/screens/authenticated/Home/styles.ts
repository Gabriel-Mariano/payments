import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";
import { FONTS } from "../../../themes/fonts";

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    body:{
        flex:1,
        paddingHorizontal:30,
        paddingVertical:20,
    },
    divisor:{
        marginTop:-50,
        alignSelf:'center' 
    },
    areaTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        paddingVertical:20,
        borderBottomWidth:1,
        borderBottomColor:'#828282'
    },
    title:{
        fontFamily:FONTS.bold,
        color:COLORS.dark,
        fontSize:18
    },
    description:{
        fontFamily:FONTS.regular,
        fontSize:12,
        color:COLORS.gray,
    },
    bold:{
        fontSize:14,
        fontFamily:FONTS.bold
    },
    footer:{
        paddingHorizontal:30,
        width:'100%',
        bottom:0,
        flexDirection:'row',
        justifyContent:'flex-end'
    }
});

export { styles };