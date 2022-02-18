import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/auth/SignIn';
import Home from '../screens/authenticated/Home';

export type StackProps = {
    SignIn:undefined;
    Home:{ token:string; }
}

const Stack = createNativeStackNavigator<StackProps>();

const Routes = () => {
  return (
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown:false }} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  );
}

export default Routes;