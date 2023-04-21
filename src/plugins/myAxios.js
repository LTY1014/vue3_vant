import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8098/api',
  timeout: 10000,
  headers: {},
})

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 请求成功，返回数据。
    const res = response.data
    if (res.code === 0) {
      return res.data
    }
    // 请求失败，返回错误信息
    // console.error('request error', response)
    return res.message
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    return Promise.reject(error)
  },
)

export default instance
