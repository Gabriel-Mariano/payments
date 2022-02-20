import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes/colors";

const styles = StyleSheet.create({
    modal:{
        justifyContent:'space-around',
        alignItems:'center',
        // height:390,
        paddingHorizontal:20,
        paddingVertical:40,
        borderRadius:20,
        backgroundColor:COLORS.white,
    },
    wrapperTexts:{
        paddingHorizontal:40,
    },
    titleModal:{
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center',
        marginBottom:30,
    },
    title:{
        marginBottom:20,
    },
    describeModal:{
        alignSelf:'center',
    },
    label:{
        marginBottom:30,
        alignSelf:'flex-start',
        paddingHorizontal:30,
    },
    customButton:{
        width:'100%',
        height:60,
        marginVertical:40,
        elevation:3,

        borderWidth:1,
        borderRadius:5,
        borderColor:COLORS.light,
        backgroundColor:COLORS.primary,

        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

        shadowColor:COLORS.black,
        shadowOpacity:0.1,
        shadowOffset: { width:0, height:2 }
    },
    wrapperDate:{
        flexDirection:'row', 
        alignItems:'center',
    },
    wrapperMessageError:{
        marginTop:-15,
        marginBottom:20,
    },
    textError:{
        color:COLORS.danger
    },
    date:{
        width:60,
    },
    year:{
        width:90,
    },
    stripe:{
        marginHorizontal:20,
    },
    totally:{
        marginBottom:20
    }
});

export { styles };
