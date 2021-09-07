import Axios, {AxiosInstance} from 'axios';
import Vue from 'vue';

const request: AxiosInstance = Axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 5000,
})

request.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})

request.interceptors.response.use(response => {
    switch (response.status) {
        case 200:case 201:
            return response.data;
        default:
            Vue.prototype.$message({
                message: response.data,
                type: 'error'
            })
            break;
    }
}, err => {
    return Promise.reject(err);
})

export default request;