import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Platform, SafeAreaView } from "react-native";

import logoLogin from "../../../assets/onbus/logo_tela_login.jpg";
import LoginController, { fazerLogin } from "../../../controller/LoginController";

// setDisplay("flex")
export default function Campos() {
    const [display, setDisplay] = useState("none");

    /**
     * Pegando os valores do formulário.
     * 
     * Nos inputs é usada a propriedade 'onChange' que irá chamar o método que pegará o valor do input.
     */
    const [campoLogin, setCampoLogin] = useState("");
    const [campoSenha, setCampoSenha] = useState("");

    const manipuladorDeEventoCampoLogin = (valor) => {
        setCampoLogin(valor);
    }

    const manipuladorDeEventoCampoSenha = (valor) => {
        setCampoSenha(valor);
    }

    const manipuladorDeEnvio = () => {
        const loginController = new LoginController();
        loginController.fazLogin(campoLogin, campoSenha)
    }
    
    return <SafeAreaView>
        <KeyboardAvoidingView style={css.conteiner} behavior={ Platform.OS == "ios" ? "padding" : "height" }>
            <View style={css.conteiner}>
                <Image style={css.login__img} source={logoLogin} />
            </View>

            <View style={css.conteiner}>
                <Text style={css.login__msg(display)}>Usuário ou senha inválidos</Text>
            </View>
 
            <View style={[css.conteiner, css.login__form]}>
                <TextInput style={css.login__input} placeholder="Usuário" value={campoLogin} onChangeText={(e) => manipuladorDeEventoCampoLogin(e)} />
                <TextInput style={css.login__input} placeholder="Senha" value={campoSenha} onChangeText={(e) => manipuladorDeEventoCampoSenha(e)} secureTextEntry={true} />
                <TouchableOpacity style={css.login__button} onPress={() => manipuladorDeEnvio()}>
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