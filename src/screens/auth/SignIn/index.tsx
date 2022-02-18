import React from 'react';
import * as AuthSession from 'expo-auth-session';
import { SafeAreaView, View, Text, Image } from 'react-native'
import { styles } from './styles';

import Woman from '../../../assets/images/woman.png';
import Code  from '../../../assets/images/code.png';

import { Header } from '../../../components/Header';
import { Button } from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackProps } from '../../../routes/';

type AuthResponse = {
    type:string;
    params:{
        access_token:string;
    }
}

const SignIn = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackProps>>();

    const handleSignIn = async () => {
        const CLIENT_ID = '1062587690913-9j3mt660j8q7fibp68sqq98bdog4vbri.apps.googleusercontent.com';
        const REDIRECT_URI = 'https://auth.expo.io/@gabriel93mariano/payments';
        const RESPONSE_TYPE = 'token';
        const SCOPE = encodeURI('profile email');

        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

       const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;

       if(type === 'success'){
           navigation.navigate('Home', { token: params.access_token });
       }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header hasHeight="35%" hasBackground="#F2F3F3" />
            <View style={styles.body} >
                <Image
                    source={Woman}
                    accessibilityLabel="Mulher com celular"
                    style={styles.image}
                />

                <Image
                    source={Code}
                    accessibilityLabel="Icone de código de barras"
                    style={styles.icon}
                />

                <Text style={styles.description}>
                    Organize seus {'\n'} boletos em um {'\n'} só lugar
                </Text>

                <Button
                    title='Entrar com Google'
                    onPress={handleSignIn}
                />
            </View>
        </SafeAreaView>

    );
}

export default SignIn;