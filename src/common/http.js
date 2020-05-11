/**
 * es6 的 class 重新封装 axios
 */

import Axios from "axios"
import Config from "@config/config"
import Qs from "qs"
import {
    jsonSort
} from "./tools"
import {
    lStorage
} from "./storage"
import router from "../router"

const config = {
    baseURL: Config.BASEURL,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
    }
}

class Request {
    constructor(config) {
        this.config = config
    }

    request() {
        const option = {
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
        }

        // 创建一个 axios 实例
        const axios = Axios.create(Object.assign(this.config, option))

        this.reqIntercept(axios) // 请求拦截
        this.resIntercept(axios) // 响应拦截

        return axios
    }

    // 请求拦截
    reqIntercept(axios) {
        // 请求拦截
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
    }

    // 响应拦截
    resIntercept(axios) {
        // 响应拦截
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
    }

    // get 请求
    get(url, body = {}) {
        if (Object.keys(body).length > 0) {
            return this.request().get(`${url}?${jsonSort(body)}`)
        }
        return this.request().get(url);
    }

    // post 请求
    post(url, body) {
        return this.request().post(url, body)
    }
}

export default new Request(config)