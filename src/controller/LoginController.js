import React from "react";

class LoginController {
    fazerLogin(login, senha) {
        const token = this.pegaToken(login, senha)
        console.log("Fazendo o Login");
        console.log(token);
    }

    pegaToken(login, senha) {
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