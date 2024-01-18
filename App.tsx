/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Login from './src/telas/Login/index';
import Home from './src/telas/Home/index';

function App() {
    return <SafeAreaView style={ estilos.tela }>
        <Login />
    </SafeAreaView>
}

const estilos = StyleSheet.create({
    tela: {
        flex: 1,
    }
})

export default App;
