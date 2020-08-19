import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';

const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SignIn Screen</Text>
      <Button
        title="Go to SignUp Screen"
        onPress={() => navigation.navigate('SignUp')}
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

export default SignInScreen;
