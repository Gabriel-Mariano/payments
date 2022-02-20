import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo as Icon } from '@expo/vector-icons';
import { styles } from './styles';
import { IAddButtonProps } from './types';

const AddButton:React.FC<IAddButtonProps> = props => {
    const { title, type, ...button } = props;
    return (
        <TouchableOpacity
            onPress={button.onPress}
            style={styles.container}
        >
            <LinearGradient
                colors={['#7A67EE', '#38ABFD', '#7A67EE']}
                style={styles.linearStyle} 
            >
                <Icon 
                    name='plus'
                    size={32} 
                    color="#fff" 
                />
            </LinearGradient> 
        </TouchableOpacity>
    )
}

export  { AddButton };