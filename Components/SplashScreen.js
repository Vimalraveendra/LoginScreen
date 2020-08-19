import React from 'react';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

MaterialIcons.loadFont();

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('../assests/logo.png')}
          style={styles.logo}
          resizeMode="cover"
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Get connected with each other</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.signIn}>
            <Text style={styles.signText}>Get Started</Text>
            <MaterialIcons name="navigate-next" size={24} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },

  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#fff',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 15,
  },
  title: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: '700',
  },
  text: {
    marginTop: 10,
  },

  signIn: {
    marginTop: 20,
    width: '40%',
    padding: 12,
    borderRadius: 20,
    flexDirection: 'row',
    position: 'absolute',
    right: 20,
  },
  signText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});

export default SplashScreen;
