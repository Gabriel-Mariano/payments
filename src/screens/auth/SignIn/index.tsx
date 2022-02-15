import React from 'react';
import { SafeAreaView, Text, Image } from 'react-native';
import { styles } from './styles';

import Logo from '../../../assets/images/icon.png';

import { Button } from '../../../components/Button';

const SignIn = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={Logo} 
                accessibilityLabel="Logo" 
                style={styles.image}
            />
            <Text style={styles.description}>
                Organize seus {'\n'} boletos em um {'\n'} só lugar
            </Text>
            <Button 
                title='Entrar com Google' 
                onPress={()=> {} }
            />
        </SafeAreaView>
        
    );
}

export default SignIn;