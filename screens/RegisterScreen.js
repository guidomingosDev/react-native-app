import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Image } from 'react-native';

import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const RegisterScreen = () => {

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();

    const handleRegister = () => {
        // Implement your login logic here
        // For example, you can check the credentials and navigate to the home screen
        navigation.navigate('Home');
    }

    const handleBackLogin = () => {
        // Implement your registration logic here
        // For example, you can navigate to the registration screen
        navigation.navigate('Login');
    };


    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View>
                <Text style={styles.message}>
                    Realize seu Cadastro
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Nome"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="CPF"
                    value={cpf}
                    onChangeText={(text) => setCpf(text)}
                    style={styles.input}
                />
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
                <TextInput
                    placeholder="Confirme sua senha"
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleRegister} style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleBackLogin} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Voltar</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    );
};

export default RegisterScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    imageContainer: {
        alignItems: 'center',
        backgroundColor: 'red',
        height: '100%',
        width: '60%',
    },
    logo: {
        width: '10%', // Adjust as necessary
        height: '10%',  // Adjust as necessary
        backgroundColor: 'black',
        padding: '50%',
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '50%',
        marginBottom: '13'
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
    message: {
        fontSize: '20px',
        margin: '10%',
        width: '80%',
        backgroundColor: 'white'
    }
})