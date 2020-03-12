import Axios from "axios"
import Config from "../config/config"
import Qs from "qs"
import {
    jsonSort
} from "./tools"
import {
    lStorage
} from "./storage"
import router from "../router"

const axios = Axios.create({
    baseURL: Config.BASEURL,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
    },
    transformRequest: data => {
        // transformRequest 方法只适用 post put等，对 get 请求没用，需要做处理
        if (data == undefined || data == null) return
        // 合并参数
        
        const arr = []
        for (const key in data) {
            arr.push(`${key}=${data[key]}`)
        }
        let str = arr.sort().join('&')
        data = Object.assign(data, {
            sign: str
        })

        return Qs.stringify(data)
    }
})

axios.interceptors.request.use(
    (config) => {
        console.log("===========================请求参数======================");
        console.log(config);
        return config
    },
    (error) => {
        console.error(error.message)
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (result) => {
        console.log("===========================响应结果======================");
        console.log(result.data);

        return result.data;
    },
    (error) => {
        if (error && error.response.status) {
            switch (error.response.status) {
                case 401:
                    error.message = '未授权，请登录'
                    /* 跳转登录页 */
                    // window.location.replace(location.origin + '/user/login');
                    break;
                default:
                    error.message = '请求失败'
            }
        }
        return Promise.reject(error)
    }
)

function get(url, body = {}) {
    if (Object.keys(body).length > 0) {
        return axios.get(`${url}?${jsonSort(body)}`)
    }
    return axios.get(url);
}

function post(url, body) {
    return axios.post(url, body)
}


export {
    get,
    post
}