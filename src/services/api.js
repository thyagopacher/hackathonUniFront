import axios from 'axios';

/**
 * altera para url do projeto conectado ao banco de dados
 */
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api; 