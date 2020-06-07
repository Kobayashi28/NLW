import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.107:4444',
});

export default api;