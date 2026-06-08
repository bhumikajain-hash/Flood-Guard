// @ts-ignore
import axios from 'axios';

const axiosConfig = axios.create({
    // baseURL: 'http://localhost:3000/floodguard',
    baseURL: 'https://flood-guard-6spy.onrender.com/floodguard',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default axiosConfig;