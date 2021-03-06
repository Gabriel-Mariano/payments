import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/auth';
import Routes from './routes';

export const Main = () => {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    );
}
