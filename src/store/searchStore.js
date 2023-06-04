import { defineStore } from 'pinia'

export const useSearchStore = defineStore({
  id: 'searchStore',
  state: () => {
    return {
      // 搜索历史
      searchHistory: ['A店铺','B店铺'],
    }
  },
  actions:{
    // 添加搜索记录方法
    addSearch(value){
      this.searchHistory.push(value)
    }
  }
})
