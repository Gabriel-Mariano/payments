import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { IHeaderProps } from './types/index.d';

import Profile from '../Profile';

const Header: React.FC<IHeaderProps> = props => {
    const { title, hasHeight, hasBackground, hasProfile } = props;

    return (
        <View style={
            [
                styles.container,
                {
                    height: hasHeight ? hasHeight : '20%',
                    backgroundColor: hasBackground ? hasBackground : '#000',
                }
            ]
        }>
            {
                hasProfile
                    ? <Profile />
                    : <Text> {title} </Text>
            }
        </View>
    )
}

export { Header };