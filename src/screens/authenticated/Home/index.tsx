import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { styles } from './styles';

type RouteParams = {
    token: string;
}

const Home: React.FC = () => {
    const [user, setUser] = useState();
    const route = useRoute();

    const { token } = route.params as RouteParams;

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        const res = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`);

        const userInfo = await res.json();

        console.log('Dados do user',userInfo);
    }

    return (
        <View style={styles.container}>
            <Text>Tela Home</Text>
        </View>
    );
}

export default Home;