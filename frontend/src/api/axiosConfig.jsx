// @ts-ignore
import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'http://localhost:3000/floodguard',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default axiosConfig;