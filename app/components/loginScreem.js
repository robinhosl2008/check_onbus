import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native';

function LoginScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FD6801' }}>
            <Text style={{ color: '#ffffff', fontSize: 40 }}>
                Tela de Login
            </Text>
            <TextInput
                style={styles.input}
            />
            <Button title='Entrar' onPress={() => navigation.navigate('Home')} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    login: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#ffffff'
    }
});

export default LoginScreen;