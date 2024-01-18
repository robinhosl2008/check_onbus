import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import Campanha from './Campanha';
import useCampanhas from './../../../hooks/useCampanhas';

export default function Campanhas({ topo: Topo }) {
    const [titulo, campanhas] = useCampanhas();

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