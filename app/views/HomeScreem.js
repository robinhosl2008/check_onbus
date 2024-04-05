import * as React from 'react';
import { View, Text, Button } from 'react-native';

export function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#008000' }}>
            <Text style={{ color: '#000000' }}>
                Home Screen
            </Text>
        </View>
    );
}