import axios from "axios";
const urlBase = 'http://localhost:5267';

const Api = axios.create({
    baseURL: urlBase,
    headers: {'X-Custom-Header': ''}
}); 

export default Api; 

