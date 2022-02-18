import React from 'react';
import { View, Text, Image } from 'react-native';
import { useAuth } from '../../contexts/auth';
import { styles } from './styles';

const Profile:React.FC = () => {
    const { user } = useAuth();
    
    return (
        <View style={styles.wrapperContentProfile}>
            <View>
                <Text style={styles.text}>
                    Olá, <Text style={styles.bold}>{user?.name}</Text>
                </Text>
                <Text style={styles.description}>
                    Mantenha suas contas em dia
                </Text>
            </View>
            <View>
                <Image 
                    style={styles.image}
                    source={{ uri: user!.picture}} 
                    accessibilityLabel="Foto de perfil"
                />
            </View>
        </View>
    );
}

export default Profile;