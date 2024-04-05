import * as React from 'react';
import { Text, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { LoginController } from '../dist/controllers/loginController.js';

function LoginScreen({ navegation }) {
    const loginController = new LoginController();

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FD6801' }}>
            <Text style={{ color: '#ffffff', fontSize: 40 }}>
                Login
            </Text>
            <TextInput
                style={styles.inputLogin}
                placeholder='E-mail'
                placeholderTextColor={'#000000'}
            />
            <TextInput
                style={styles.inputPassword}
                placeholder='Senha'
                placeholderTextColor={'#000000'}
            />
            <Button 
                title='Entrar' 
                onPress={() => loginController.show()}
                // onPress={() => navigation.navigate('Home')} 
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    inputLogin: {
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 0.1,
        padding: 10,
        backgroundColor: '#ffffff',
        color: '#000000'
    },
    inputPassword: {
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 0.1,
        padding: 10,
        backgroundColor: '#ffffff',
        color: '#000000'
    }
});

export default LoginScreen;