import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../screens/authenticated/Home';

export type AppRoutesPros = {
    Home:undefined;
}

const { Navigator, Screen} = createNativeStackNavigator<AppRoutesPros>();

const AppRoutes:React.FC = () => {
  return (
      <Navigator screenOptions={{ headerShown:false }}>
        <Screen name="Home" component={Home} />
      </Navigator>
  );
}

export default AppRoutes;