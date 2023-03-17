import env from './env'
import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios'

const http = axios.create({
  //timeout: 8000, /*设置请求超时时间*/
  baseURL: env.apiUrl,
  // headers: {
  //   'content-type': 'application/json',
  // },
})

// 添加响应拦截器
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default http
