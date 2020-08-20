import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../Screens/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'HomeScreen',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
