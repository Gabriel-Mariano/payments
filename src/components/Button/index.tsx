import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { IButtonProps } from './types/index.d';
import { styles } from './styles/index';

import IconGoogle from '../../assets/images/google.png';

const Button: React.FC<IButtonProps> = props => {
    const { title, ...rest } = props;

    return (
        <TouchableOpacity
            onPress={rest.onPress}
            style={styles.wrapperButton}
        >
            <View style={styles.areaIcon}>
                <Image 
                    source={IconGoogle} 
                    style={styles.image} 
                />
            </View>
            <View style={styles.areaTitle}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export { Button };