import { StyleSheet } from 'react-native';
import { FONTS } from '../../../themes/fonts';
import { COLORS } from '../../../themes/colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    body:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:20,
    },
    image:{
        width:260,
        height:300,
        resizeMode:'cover',
        marginTop:-200,
    },
    description:{
        fontFamily:FONTS.bold,
        fontSize:28,
        color:COLORS.gray,
        textAlign:'center',
    }
});

export { styles };