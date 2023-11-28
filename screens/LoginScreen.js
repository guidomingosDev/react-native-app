import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Image } from 'react-native';

import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Implement your login logic here
    // For example, you can check the credentials and navigate to the home screen
    navigation.navigate('Home');
  };

  const handleSignUp = () => {
    // Implement your registration logic here
    // For example, you can navigate to the registration screen
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
    <View style={styles.imageContainer}>
    <Image
      source={require('../assets/logo.png')}
      style={styles.logo}
    />
  </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 40,
      backgroundColor: 'white',
      height: '20%',
      width:'60%',
    },
    logo: {
      width: '50%', // Adjust as necessary
      height: '50%',  // Adjust as necessary
      backgroundColor: 'black',
      padding: '50%',
    },
    inputContainer: {
      marginTop: 50, // Adjust as necessary
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      height: '10%',
    },
    input: {
      backgroundColor: 'white',
      width: '100%',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 10,
      borderWidth: 1,
      borderColor: '#b2b4b4',
    },
    buttonContainer: {
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 45,
      backgroundColor: 'white'
    },
    button: {
      backgroundColor: '#131506',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: '#f8f8f8',
      marginTop: 5,
      borderColor: '#131506',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#131506',
      fontWeight: '700',
      fontSize: 16,
    },
  });
  