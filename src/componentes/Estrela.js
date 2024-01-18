import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

import estrela from "./../assets/curso/estrela.png";
import estrelaCinza from "./../assets/curso/estrelaCinza.png";

export default function Estrela({ 
    onPress, 
    desabilitado = true,
    preenchido,
    grande = false
}) {
    const estilos = estilosFuncao(grande);

    const getImagem = () => {
        if (preenchido) {
            return estrela;
        }

        return estrelaCinza;
    }

    return <TouchableOpacity 
        onPress={onPress} 
        disabled={desabilitado}
    >
        <Image source={getImagem()} style={estilos.estrela} />
    </TouchableOpacity>
}



const estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 28 : 14,
        height: grande ? 28 : 14,
        marginRight: 2
    }
})