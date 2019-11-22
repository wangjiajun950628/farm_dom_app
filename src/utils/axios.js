import axios from 'axios'
import {getToken} from '../utils/cookie'

const service = axios.create({
  baseURL: process.env.OAUTH2_API, // api 的 base_url,
  timeout: 5000,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Authorization': 'Bearer ' + getToken(),
    'Content-Type': 'application/jsoncharset=utf-8'
  }
})

// 请求拦截
service.interceptors.request.use(config => {
      // 请求前的处理
      // console.log(config)
      return config
    }, error => {
      // 请求异常的处理
      console.log(error)
      return Promise.reject(error)
    }
)

// 响应拦截
service.interceptors.response.use(response => {
      // 构建响应数据结构
      return response
    }, error => {
      // 响应异常的处理
      if (error && error.response) {
        // 异常处理
        switch (error.response.status) {
          case 400 :
            console.log('错误请求')
            break
          case 401:
            console.log('未授权，请重新登录')
            let second = 3
            const timer = setInterval(() => {
              second--
              if (second) {
                window.location.href = '/login'
              } else {
                clearInterval(timer)
              }
            }, 1000)
            break
          case 403:
            console.log('拒绝访问')
            break
          case 404:
            console.log('请求错误，未找到资源')
            break
          case 405:
            console.log('请求方法未允许')
            break
          case 408:
            console.log('请求超时')
            break
          case 500:
            console.log('服务器端出错')
            break
          case 501:
            console.log('网络未实现')
            break
          case 502:
            console.log('网络错误')
            break
          case 503:
            console.log('服务不可用')
            break
          case 504:
            console.log('网络超时')
            break
          case 505:
            console.log('http版本不支持该请求')
            break
          default:
            console.log('连接错误状态码：' + error.response.status)
        }
      } else {
        console.log('网络出现问题，请稍后再试')
      }
      return Promise.resolve(error)
    }
)

export default service
