import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../Components/SignInScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={SignInScreen}
        options={{title: 'Overview'}}
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
