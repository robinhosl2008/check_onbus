import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import Campanha from './Campanha';
import { carregaCampanhas } from '../../../servicos/carregaDados';

export default function Campanhas({ topo: Topo }) {
    const [titulo, setTitulo] = useState('');
    const [campanhas, setCampanhas] = useState('');

    useEffect(() => {
        const retorno = carregaCampanhas();
        setTitulo(retorno.titulo);
        setCampanhas(retorno.campanhas)
    }, []);

    const ListaTitulo = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{ titulo }</Text>
        </>
    }

    return <>
        <FlatList
            data={campanhas}
            renderItem={({ item }) => <Campanha {...item} />}
            keyExtractor={({nome}) => nome}
            ListHeaderComponent={ ListaTitulo }
        ></FlatList>
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold'
    }
});