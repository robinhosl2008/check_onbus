import { useEffect, useState } from 'react';
import { carregaCampanhas } from './../servicos/carregaDados';

export default function Campanhas() {
    const [titulo, setTitulo] = useState('');
    const [campanhas, setCampanhas] = useState([]);

    useEffect(() => {
        const retorno = carregaCampanhas('distancia');
        retorno.campanhas.sort(
            (camp1, camp2) => (camp1.distancia > camp2.distancia ? 1 : camp2.distancia > camp1.distancia ? -1 : 0)    //para ordenar por ordem alfabética crescente
        );
        setTitulo(retorno.titulo);
        setCampanhas(retorno.campanhas)
    }, []);

    return [titulo, campanhas]; 
}