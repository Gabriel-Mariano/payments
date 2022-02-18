import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { IButtonProps } from './types/index.d';
import { styles } from './styles/index';

import IconGoogle from '../../assets/images/google.png';
import { COLORS } from '../../themes/colors';

const Button: React.FC<IButtonProps> = props => {
    const { title, hasImage, titleColor , ...buttonProps } = props;

    return (
        <TouchableOpacity
            onPress={buttonProps.onPress}
            style={[
                buttonProps.style 
                    ? buttonProps.style 
                    : styles.wrapperButton 
            ]}
        >
            { 
                hasImage 
                    ? <>  
                        <View style={styles.areaIcon}>
                            <Image 
                                source={IconGoogle} 
                                style={styles.image} 
                            />
                        </View>
                        <View style={styles.areaTitle}>
                            <Text style={[
                                styles.title,
                                {
                                    color: titleColor ? titleColor : COLORS.gray
                                }
                            ]}>
                                {title}
                            </Text>
                        </View>
                      </>
                    : <View style={styles.areaTitle}>
                        <Text style={[
                            styles.title,
                            {
                                color: titleColor ? titleColor : COLORS.gray
                            }
                        ]}>
                            {title}
                        </Text>
                      </View>
            }
        </TouchableOpacity>
    );
}

export { Button };