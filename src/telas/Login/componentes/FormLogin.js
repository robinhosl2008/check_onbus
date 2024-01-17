import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-vector-icons";

import logoLogin from "../../../assets/onbus/Logo_ONBUS-final_cor-1-1-1024x638.png";

class FormLogin extends React.Component {
    render() {
        return <>
            <View style={estilos.content}>
                <Image source={logoLogin} style={estilos.logoLogin} />
                <Text>Formulário de Login</Text>
            </View>
        </>
    }
}

const estilos = StyleSheet.create({
    content: {
        alignItems: "center",
        marginTop: 200
    },
    logoLogin: {
        width: 200,
        height: 124
    }
});

export default FormLogin;