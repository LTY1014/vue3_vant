import axios from 'axios'

const isDev = process.env.NODE_ENV === 'development'

const instance = axios.create({
  //TODO 部署修改线上地址
  baseURL: isDev ? 'http://localhost:8088/api' : '线上地址',
  timeout: 10000,
  withCredentials: true,
})

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 前端发送请求成功
    const res = response.data

    //根据返回的code值来做不同处理
    // 请求失败，返回错误信息
    if (res.code !== 0) {
      // 未登录跳转登录页面
      if (res.code === 40100) {
        const redirectUrl = window.location.href
        window.location.href = `/user/login?redirect=${redirectUrl}`
      }
      console.error('request error', res.message)
      return res.message
    }
    return res
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    return Promise.reject(error)
  },
)

/**
 * get请求
 * @param url 请求地址
 * @param params 请求参数
 */
export function getRequest(url, params) {
  return instance({
    method: 'GET',
    url: `${url}`,
    params: params,
  })
}

/**
 * post请求
 * @param url 请求地址
 * @param data 请求数据
 * @returns {Promise}
 */
export function postRequest(url, data) {
  return instance({
    method: 'POST',
    url: `${url}`,
    data,
  })
}

export default instance
