import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { styles } from './styles';

import { Header } from '../../../components/Header';

const Home: React.FC = () => {
    
    return (
        <SafeAreaView style={styles.container}>
            <Header 
                hasProfile={true}
                hasBackground="#7A67EE"
            />
            <View style={styles.body}>
                <Text>Tela Home</Text>
            </View>
        </SafeAreaView>
    );
}

export default Home;