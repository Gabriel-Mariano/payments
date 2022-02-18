import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../../screens/auth/SignIn';

export type AuthRoutesProps = {
    SignIn:undefined;
}

const { Navigator, Screen} = createNativeStackNavigator<AuthRoutesProps>();

const AuthRoutes:React.FC = () => {
  return (
      <Navigator>
        <Screen name="SignIn" component={SignIn} options={{ headerShown:false }} />
      </Navigator>
  );
}

export default AuthRoutes;