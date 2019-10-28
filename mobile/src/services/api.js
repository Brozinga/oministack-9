import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.88.171:2000'
})

export default api;