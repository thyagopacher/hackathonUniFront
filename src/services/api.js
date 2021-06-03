import axios from 'axios';

/**
 * altera para url do projeto conectado ao banco de dados
 */
const api = axios.create({
    baseURL: "https://hackathon-api.andreazza.dev",
    headers: {
        "Content-type": "application/json"
    }
});

export default api;