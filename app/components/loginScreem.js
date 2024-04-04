import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FD6801' }}>
            <Text style={{ color: '#000000' }}>
                Login Screen
            </Text>
            <Button title='Entrar' onPress={() => navigation.navigate('Home')} />
        </View>
    );
}