import React from 'react';
import { View, Text } from 'react-native';
import { AddButton } from '../AddButton';
import { styles } from './styles';
import { ICardProps } from './types/index.d';

const Card:React.FC<ICardProps> = props => {
    const { title, date, totally } = props;

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
                <Text style={styles.title}>
                    R$ {totally.toFixed(2)}
                </Text>
            </View>
        </View>
    );
}  

export { Card };