import * as React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

export default function ChamadoScreen() {
    return (
        <View style={styles.content}>
            <Text style={{ color: '#000000' }}>
                Lista de Chamados
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#FD6801'
    }
});