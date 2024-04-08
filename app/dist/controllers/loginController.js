var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
export class LoginController {
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = 'http://192.168.1.144:8000/api/logar';
                const data = {
                    login: 'test@example.com',
                    password: 'teste'
                };
                const response = yield axios.post(url, data, {
                    headers: {
                        "Content-Type": "application/json; charset-UTF-8",
                    }
                });
                console.log('Resposta: ', response);
            }
            catch (error) {
                console.error("Erro ao buscar os dados: ", error);
            }
        });
    }
}
//# sourceMappingURL=loginController.js.map