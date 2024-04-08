import * as React from 'react';
import { Text, Button, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { LoginController } from '../dist/controllers/loginController.js';

function LoginScreen({ navigation }) {
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
            <TouchableOpacity style={styles.btnLogar} onPress={async () => await loginController.login()}>
                <Text>Entrar</Text>
            </TouchableOpacity> 
        </SafeAreaView>
    );
}
// () => {
//     var a = loginController.login();
//     alert(a);
// }
// () => navigation.navigate('Home')
const styles = StyleSheet.create({
    inputLogin: {
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 0.3,
        padding: 10,
        backgroundColor: '#ffffff',
        color: '#000000'
    },
    inputPassword: {
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 0.3,
        padding: 10,
        backgroundColor: '#ffffff',
        color: '#000000'
    },
    btnLogar: {
        width: 100,
        height: 45,
        margin: 12,
        backgroundColor: '#FA383E',
        borderWidth: 0.3,
        alignItems: 'center',
        padding: 10
    }
});

export default LoginScreen;