import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Platform, SafeAreaView } from "react-native";

import logoLogin from "../../../assets/onbus/logo_tela_login.jpg";

export default function Campos() {
    const [display, setDisplay] = useState("none");

    return <SafeAreaView>
        <KeyboardAvoidingView style={css.conteiner} behavior={ Platform.OS == "ios" ? "padding" : "height" }>
            <View style={css.conteiner}>
                <Image style={css.login__img} source={logoLogin} />
            </View>

            <View style={css.conteiner}>
                <Text style={css.login__msg(display)}>Usuário ou senha inválidos</Text>
            </View>
 
            <View style={[css.conteiner, css.login__form]}>
                <TextInput style={css.login__input} placeholder="Usuário" />
                <TextInput style={css.login__input} placeholder="Senha" secureTextEntry={true} />
                <TouchableOpacity style={css.login__button} onPress={() => setDisplay("flex")}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
}   

const css = StyleSheet.create({
    conteiner: {
        paddingHorizontal: 30
    },
    login__img: {
        width: "100%",
        paddingVertical: "30%",
        marginTop: "50%"
    },
    darkbg: {
        backgroundColor: "#333"
    },
    login__msg: (text='none') => ({
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        color: "red",
        marginTop: 10,
        marginBottom: 15,
        display: text
    }),
    login__form: {
        paddingTop: 40
    },
    login__input: {
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15
    },
    login__button: {
        padding: 12,
        backgroundColor: "#FD6801",
        alignSelf: "center",
        borderRadius: 5
    },
    login__buttonText: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#fff"
    }
});