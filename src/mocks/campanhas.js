import green from './../assets/curso/produtores/green.png';
import grow from './../assets/curso/produtores/grow.png';
import jannyJack from './../assets/curso/produtores/jenny-jack.png';
import potager from './../assets/curso/produtores/potager.png';
import salad from './../assets/curso/produtores/salad.png';

// gerando um número rondômico em um range.
const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const campanhas = {
    titulo: "Lista de Campanhas",
    campanhas: [
        {
            nome: "Nome da Campanha 1",
            imagem: green,
            distancia: `${gerarNumeroAleatorio(1, 500)} metros`,
            estrelas: gerarNumeroAleatorio(1, 5)
        },
        {
            nome: "Nome da Campanha 2",
            imagem: grow,
            distancia: `${gerarNumeroAleatorio(1, 500)} metros`,
            estrelas: gerarNumeroAleatorio(1, 5)
        },
        {
            nome: "Nome da Campanha 3",
            imagem: jannyJack,
            distancia: `${gerarNumeroAleatorio(1, 500)} metros`,
            estrelas: gerarNumeroAleatorio(1, 5)
        },
        {
            nome: "Nome da Campanha 4",
            imagem: potager,
            distancia: `${gerarNumeroAleatorio(1, 500)} metros`,
            estrelas: gerarNumeroAleatorio(1, 5)
        },
        {
            nome: "Nome da Campanha 5",
            imagem: salad,
            distancia: `${gerarNumeroAleatorio(1, 500)} metros`,
            estrelas: gerarNumeroAleatorio(1, 5)
        }
    ]
}

export default campanhas;