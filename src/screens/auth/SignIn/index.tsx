import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { styles } from './styles';

import Woman from '../../../assets/images/woman.png';

import { Header } from '../../../components/Header';
import { Button } from '../../../components/Button';

const SignIn = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header hasHeight="35%" hasBackground="#7A67EE" />
            <View style={styles.body} >
                <Image
                    source={Woman}
                    accessibilityLabel="Mulher com celular"
                    style={styles.image}
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