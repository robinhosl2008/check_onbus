import { useEffect, useState } from 'react';
import { carregaCampanhas } from './../servicos/carregaDados';

export default function Campanhas() {
    const [titulo, setTitulo] = useState('');
    const [campanhas, setCampanhas] = useState('');

    useEffect(() => {
        const retorno = carregaCampanhas();
        setTitulo(retorno.titulo);
        setCampanhas(retorno.campanhas)
    }, []);

    return [titulo, campanhas];
}