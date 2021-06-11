import axios from 'axios';

/**
 * altera para url do projeto conectado ao banco de dados
 */
const urlMongo = 'http://localhost:3333';
const urlApi = 'https://hackathon-api.andreazza.dev';

const api = axios.create({
    baseURL: urlApi,
    headers: {
        "Content-type": "application/json"
    }
});

export default api;