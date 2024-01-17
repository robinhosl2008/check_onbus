import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import estrela from "./../assets/curso/estrela.png";
import estrelaCinza from "./../assets/curso/estrelaCinza.png";

export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false
}) {
    const [ quantidade, setQuantidade ] = useState(quantidadeAntiga);
    const estilos = estilosFuncao(grande);

    const getImage = (index) => {
        if (index < quantidade) {
            return estrela;
        }

        return estrelaCinza;
    }

    const RenderEstrelas = () => {
        const listaEstrelas = [];
        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <TouchableOpacity 
                    key={i} 
                    onPress={() => {setQuantidade(i + 1)}} 
                    disabled={!editavel}
                >
                    <Image source={getImage(i)} style={estilos.estrela} />
                </TouchableOpacity>
            );
        }

        return listaEstrelas;
    }
    
    return <View style={estilos.estrelas}>
        <RenderEstrelas />
    </View>
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrelas: {
        flexDirection: "row"
    },
    estrela: {
        width: grande ? 28 : 14,
        height: grande ? 28 : 14,
        marginRight: 2
    }
})