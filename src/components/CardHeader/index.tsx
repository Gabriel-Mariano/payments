import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { ICardProps } from './types';
import { styles } from './styles';

const CardHeader:React.FC<ICardProps> = props => {
    const { amount } = props;

    const renderText = () => {
        return amount > 0 
            ? <Text style={styles.text}>
                Você tem <Text style={styles.bold}>{amount} boletos </Text>{`\n`}
                cadastrados para pagar
             </Text>
            : <Text style={styles.text}>
                Você ainda não tem boletos {`\n`} cadastrados para pagar
             </Text>
    }

    return (
        <View style={styles.container}>
            <View>
                <Icon 
                    name="barcode-scan" 
                    size={32} 
                    color="#fff"
                />
            </View>
            <View>
                {renderText()}
            </View>
        </View>
    );
}

export { CardHeader };