import axios from 'axios';
import qs from 'qs';

let API_HOST = '/dev';
if (process.env.HOST === 'prod') {
    API_HOST = 'http://prod.com';
} else if (process.env.HOST === 'test') {
    API_HOST = 'http://test.com';
}
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (token) {
        config.headers.login_token = token;
    }
    return config;
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    if (response.data.code !== 200) {
        if(response.data.code === 3005){
        }
        return Promise.reject(response.data);
    }
    return response.data;
});


function get(url, data) {
    return axios.get(API_HOST + url, {
        params: data
    });
}

function post(url, data) {
    data['login_token'] = token;
    return axios.post(API_HOST + url, qs.stringify(data));
}

export default {
    get, post
}
