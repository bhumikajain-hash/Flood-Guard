// @ts-ignore
import axios from 'axios';

const axiosConfig = axios.create({

    baseURL: 'https://flood-guard-6spy.onrender.com/floodguard',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default axiosConfig;