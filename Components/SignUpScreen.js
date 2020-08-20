import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import FontIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

FontIcon.loadFont();
FeatherIcon.loadFont();

const SignUpScreen = ({navigation}) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    inputText: false,
    inputPassword: false,
    secureTextEntry: true,
    confirmSecureTextEntry: true,
  });
  const setInputText = (text, val) => {
    if (text.length !== 0) {
      setState({
        ...state,
        name: text,
        inputText: true,
      });
    } else {
      setState({
        ...state,
        name: text,
        inputText: false,
      });
    }
  };

  const setPasswordVal = (text) => {
    if (text.length !== 0) {
      setState({
        ...state,
        email: text,
        inputPassword: true,
      });
    } else {
      setState({
        ...state,
        email: text,
        inputPassword: false,
      });
    }
  };

  const setPassword = (text) => {
    setState({
      ...state,
      password: text,
    });
  };

  const setConfirmPassword = (text) => {
    setState({
      ...state,
      confirmPassword: text,
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

  const toggleConfirmSecureText = () => {
    if (state.confirmPassword.length !== 0) {
      setState({
        ...state,
        confirmSecureTextEntry: !state.confirmSecureTextEntry,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Register</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.footerText}>Name</Text>
        <View style={styles.emailFonts}>
          <FontIcon name="user-o" size={20} color="#05375a" />
          <TextInput
            placeholder="Enter your name"
            style={styles.textInput}
            onChangeText={(text) => setInputText(text)}
          />
          {state.inputText ? (
            <Animatable.View animation="bounceIn">
              <FeatherIcon name="check-circle" size={20} color="green" />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={[styles.footerText, {marginTop: 30}]}>Email</Text>
        <View style={styles.emailFonts}>
          <FontIcon name="user-o" size={20} color="#05375a" />
          <TextInput
            placeholder="Enter your email"
            style={styles.textInput}
            onChangeText={(text) => setPasswordVal(text)}
          />
          {state.inputPassword ? (
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
        <View style={styles.password}>
          <Text style={styles.footerText}>Confirm Password</Text>
          <View style={styles.emailFonts}>
            <FontIcon name="lock" size={20} color="#05375a" />
            <TextInput
              placeholder="Confirm your password"
              style={styles.textInput}
              secureTextEntry={state.confirmSecureTextEntry ? true : false}
              onChangeText={(text) => setConfirmPassword(text)}
            />
            <TouchableOpacity onPress={toggleConfirmSecureText}>
              {state.confirmSecureTextEntry ? (
                <FeatherIcon name="eye-off" size={20} color="grey" />
              ) : (
                <FeatherIcon name="eye" size={20} color="green" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button}>
          <LinearGradient
            colors={['#009387', '#3b5998', '#192f6a']}
            style={styles.signIn}>
            <Text style={styles.signInText}>SignUp</Text>
          </LinearGradient>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.signUp}>
            <Text style={[styles.signInText, {color: '#333'}]}>SignIn</Text>
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

export default SignUpScreen;
