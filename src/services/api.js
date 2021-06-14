import axios from 'axios';

/**
 * altera para url do projeto conectado ao banco de dados
 */
const urlMongo = 'http://localhost:3333';
const urlApi = 'https://hackathon-api.andreazza.dev';

const api = axios.create({
    baseURL: urlApi,
    withCredentials: false,
    headers: {
        "Content-type": "application/json;charset=utf-8",
    }
});

api.interceptors.response.use((response) => response, (error) => {
    let msgErro = error;
    if (error.response.status == 405) {
        msgErro = 'Método HTTP não implementado no servidor !';
    } else if (error.response.status == 404) {
        msgErro = 'Não encontrado';
    } else if (error.response.status == 500) {
        msgErro = 'Falha no servidor';
    }
    throw msgErro;
});

export default api;