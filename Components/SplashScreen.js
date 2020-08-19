import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
      <Button
        title="Go to SignIn Screen"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
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

export default SplashScreen;
