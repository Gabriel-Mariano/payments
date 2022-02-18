import { StyleSheet } from "react-native";
import { FONTS } from '../../../themes/fonts';
import { COLORS } from '../../../themes/colors';

const styles = StyleSheet.create({
    container:{
        width:300,
    },
    wrapperInput:{
        width:'100%',
        height:50,

        flexDirection:'row',
         

        borderRadius:6,
        backgroundColor:COLORS.light,
        
        marginVertical:10,
    },
    label:{
        fontFamily:FONTS.regular,
        marginLeft:10,
    },
    leftContent:{
        width:'15%',
        height:50,

        justifyContent:'center',
        alignItems:'center',

        backgroundColor:COLORS.light,

        borderTopLeftRadius:6,
        borderBottomLeftRadius:6
    },
    textInput:{
       paddingHorizontal:8,
    },
    rightContent:{
        width:'15%',
        height:50,

        justifyContent:'center',
        alignItems:'center',

        borderTopRightRadius:6,
        borderBottomRightRadius:6
    },
    errorMessage:{
        color:COLORS.dark
    }
});

export { styles };