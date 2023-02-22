import axios from 'axios';

import getEnvVars from '../../environment';

const { apiUrl } = getEnvVars();
const instance = axios.create({
    baseURL: apiUrl//'http://192.168.1.6:3000'
});

export default instance;