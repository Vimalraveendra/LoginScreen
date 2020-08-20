import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import FontIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

FontIcon.loadFont();
FeatherIcon.loadFont();

const SignInScreen = ({navigation}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    inputText: false,
    secureTextEntry: true,
  });
  const setInputText = (text) => {
    if (text.length !== 0) {
      setState({
        ...state,
        email: text,
        inputText: true,
      });
    } else {
      setState({
        ...state,
        email: text,
        inputText: false,
      });
    }
  };

  const setPassword = (text) => {
    setState({
      ...state,
      password: text,
    });
  };

  const toggleSecureText = () => {
    if (state.password.length !== 0) {
      setState({
        ...state,
        secureTextEntry: !state.secureTextEntry,
      });
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.footerText}>Email</Text>
        <View style={styles.emailFonts}>
          <FontIcon name="user-o" size={20} color="#05375a" />
          <TextInput
            placeholder="Enter your email"
            style={styles.textInput}
            onChangeText={(text) => setInputText(text)}
          />
          {state.inputText ? (
            <Animatable.View animation="bounceIn">
              <FeatherIcon name="check-circle" size={20} color="green" />
            </Animatable.View>
          ) : null}
        </View>
        <View style={styles.password}>
          <Text style={styles.footerText}>Password</Text>
          <View style={styles.emailFonts}>
            <FontIcon name="lock" size={20} color="#05375a" />
            <TextInput
              placeholder="Enter your password"
              style={styles.textInput}
              secureTextEntry={state.secureTextEntry ? true : false}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={toggleSecureText}>
              {state.secureTextEntry ? (
                <FeatherIcon name="eye-off" size={20} color="grey" />
              ) : (
                <FeatherIcon name="eye" size={20} color="green" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button}>
          <LinearGradient
            colors={['#4c669f', '#009387', '#192f6a']}
            style={styles.signIn}>
            <Text style={styles.signInText}>SignIn</Text>
          </LinearGradient>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={styles.signUp}>
            <Text style={[styles.signInText, {color: '#333'}]}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b5998',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
  },
  headerText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '700',
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  footerText: {
    fontSize: 18,
    paddingBottom: 10,
  },
  emailFonts: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  textInput: {
    paddingLeft: 15,
    flex: 1,
  },
  password: {
    marginTop: 30,
  },
  button: {
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  signInText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
  signUp: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
  },
});

export default SignInScreen;
