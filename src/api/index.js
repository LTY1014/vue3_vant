import { getRequest, postRequest } from '@/plugins/requestConfig'

export const userLogin = (params) => {
  return postRequest('/user/login', params)
}

export const userLogout = (params) => {
  return postRequest('/user/logout', params)
}

export const getLoginUser = (params) => {
  return getRequest('/user/get/login', params)
}
