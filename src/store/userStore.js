import { defineStore } from 'pinia'
import { getLoginUser } from '@/api'

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => {
    return {
      loginUser: {},
    }
  },
  actions: {
    // 用户退出
    logout() {
      this.loginUser = {}
    },
    // 获取当前用户
    getLoginUser() {
      if (!this.loginUser) {
        const res = getLoginUser()
        if (res.code === 0 && res.data) {
          this.loginUser = res.data
        }
      }
      return this.loginUser
    },
  },
})
