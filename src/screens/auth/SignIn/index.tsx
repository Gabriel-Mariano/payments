import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { styles } from './styles';

import Woman from '../../../assets/images/woman.png';
import Code  from '../../../assets/images/code.png';

import { Header } from '../../../components/Header';
import { Button } from '../../../components/Button';

const SignIn = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header hasHeight="35%" hasBackground="#fff" />
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
                    onPress={() => { }}
                />
            </View>
        </SafeAreaView>

    );
}

export default SignIn;