import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../Components/SplashScreen';
import SignInScreen from '../Components/SignInScreen';
import SignUpScreen from '../Components/SignUpScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={SplashScreen}
        options={{title: 'Overview'}}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default StackNavigator;
