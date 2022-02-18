import React from 'react';

import { useAuth } from '../contexts/auth';
import { ActivityIndicator, View } from 'react-native';
import { COLORS } from '../themes/colors';

import AppRoutes from './authenticated';
import AuthRoutes from './unauthenticated';

const Routes:React.FC = () => {
  const { user, loading } = useAuth();

  if(loading){
    return (
        <View 
            style={{ 
                flex:1, 
                justifyContent:'flex-end', 
                alignItems:'center', 
                paddingVertical:40 
            }}
        >
            <ActivityIndicator size="large" color={COLORS.primary}/> 
        </View>
        
    );
}

const route = user ? <AppRoutes/> : <AuthRoutes/>

return route;
}

export default Routes;