import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../Components/SplashScreen';
import SignInScreen from '../Components/SignInScreen';
import SignUpScreen from '../Components/SignUpScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          title: 'Overview',
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{title: 'Register'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
