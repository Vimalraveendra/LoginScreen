import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>sign up</Text>
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

export default SignUpScreen;
