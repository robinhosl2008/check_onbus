import React, { useState, useReducer } from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Estrelas from "../../../componentes/Estrelas";

export default function Campanha({nome, imagem, distancia, estrelas}) {
    const [ selecionado, inverteSelecionado ] = useReducer(
        (selecionado) => !selecionado,
        false
    );

    return <TouchableOpacity
        onPress={inverteSelecionado}
    >
        <View style={estilos.cartao}>
            <Image source={imagem} style={estilos.imagem} accessibilityLabel={nome} />
            <View style={estilos.informacoes}>
                <View>
                    <Text>{ nome }</Text>
                    <Estrelas 
                        quantidade={estrelas}
                        editavel={selecionado}
                        grande={selecionado}
                    />
                </View>
                
                <Text>{ distancia }</Text>
            </View>
        </View>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        elevation: 4
    },
    imagem: {
        width: 50,
        height: 50,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    informacoes: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginHorizontal: 16
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold"
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19
    }
});