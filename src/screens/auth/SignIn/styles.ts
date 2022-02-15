import { StyleSheet } from 'react-native';
import { FONTS } from '../../../themes/fonts';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { COLORS } from '../../../themes/colors';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:20,
    },
    image:{
        width:260,
        height:300,
        resizeMode:'contain',
        marginTop:60
    },
    description:{
        fontFamily:FONTS.bold,
        fontSize:28,
        color:COLORS.gray,
        textAlign:'center',
    }
});

export { styles };