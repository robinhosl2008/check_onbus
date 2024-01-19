import React from "react";

class LoginController {
    fazLogin(login, senha) {
        const token = this.pegaToken(login, senha)
        console.log("Fazendo o Login");
        console.log(token);
    }

    pegaToken(login, senha) {
        // Faço uma requisição para a API solicitando o token. Para pegar o token o usuário
        // deve ter enviado suas credenciais para a realização do login. Se não passar no
        // login o token não é criado.

        // fazRequisição() enviando o formData e link para fazer o login e recuperar o token.
        return "token";
    }

    /**async fazRequisicao(formData = null, link = null, method = null) {
        if (link) {
            return new Promise(resolve => {
                $.ajax({
                    type: (method) ?? 'POST',
                    url: link,
                    cache: false,
                    processData: false,  
                    contentType: false,
                    data: formData,
                    success: function(data) {
                        return resolve(data);
                    }
                });
            });
        }
    }*/
}

export default LoginController;