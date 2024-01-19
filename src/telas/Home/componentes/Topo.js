import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { carregaTopo, carregaCampanhas } from '../../../servicos/carregaDados';
import logo from './../../../assets/onbus/Logo_200x200.png';

class Topo extends React.Component {
    state = {
        topo: {
            boasVindas: '',
            legenda: ''
        }
    }

    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({ topo: retorno });
    }

    componentDidMount() {
        this.atualizaTopo();
    }

    render() {
        return <>
            <View style={estilos.topo}>
                <Image source={logo} style={estilos.imgTopo}></Image>
                <Text style={estilos.nomeUsuario}>
                    { this.state.topo.nomeUsuario }
                    <Icon name="caret-down" size={20} color="#FD6801" />
                </Text>
            </View>
        </>
    }
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 10
    },
    imgTopo: {
        width: 130,
        height: 80
    },
    nomeUsuario: {
        position: 'absolute',
        top: 35, 
        fontSize: 18,
        right: 10
    }
});

export default Topo;