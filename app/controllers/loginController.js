

export class LoginController {
    async login() {
        const response = await fetch("http://localhost:8000/api/logar");
        const data = JSON.stringify(response.json());
console.log(data);
        return data;
    }
}