import axios from 'axios';

export class LoginController {
    async login(): Promise<void> {
        try {
            // URL de destino que futuramente ficará em outro local de acordo com o ambiente.
            const url = 'http://192.168.1.144:8000/api/logar'; 

            // Dados a serem enviados.
            const data = {
                login: 'test@example.com',
                password: 'teste'
            }
 
            const response = await axios.post(url, data, {
                headers: {
                    "Content-Type": "application/json; charset-UTF-8",
                }
            });
            console.log('Resposta: ', response);

            // const credentials = {
            //     login: 'test@example.com',
            //     password: 'teste'
            // }

            // const options = {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(credentials),
            // }

            // const response = await fetch("http://localhost:8000/api/logar", options);
            // var data = await response.json();
            // data = JSON.stringify(data);
            // console.log(data);
            // return data;
        } catch (error) {
            console.error("Erro ao buscar os dados: ", error);
        }
        
    }
}