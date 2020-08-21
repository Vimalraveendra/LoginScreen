import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';

import {AuthContext} from '../Components/Context';

const HomeScreen = () => {
  const {signOut} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title="signOut" onPress={() => signOut()} />
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
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
