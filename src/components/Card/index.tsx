import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ICardProps } from './types/index.d';

import {Ionicons as Icon } from '@expo/vector-icons';

const Card:React.FC<ICardProps> = props => {
    const { uuid, title, date, totally, data, setData } = props;

    const removePayment = () => {
        const removeUuid = data.filter((values) => values.uuid !== uuid );

        setData(removeUuid);
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.descriptionDate}>
                    vence em {date}
                </Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={removePayment}
                    style={styles.closeButton}
                >
                    <Icon name="close" size={14} color={'#fff'}/>
                </TouchableOpacity>
                <Text style={styles.totally}>
                    R$ {totally.toFixed(2)}
                </Text>
            </View>
        </View>
    );
}  

export { Card };