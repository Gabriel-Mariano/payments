import React from 'react';
import { View, Text } from 'react-native';
import { IHeaderProps } from './types/index.d';
import { styles } from './styles';

const Header: React.FC<IHeaderProps> = props => {
    const { title, hasHeight, hasBackground } = props;

    return (
        <View style={
            [
                styles.container,
                {
                    height: hasHeight ? hasHeight : '20%',
                    backgroundColor: hasBackground ? hasBackground : '#000'
                }
            ]
        }>
            <Text>
                {title}
            </Text>
        </View>
    )
}

export { Header };