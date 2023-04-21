<template>
  <van-search v-model="searchText" placeholder="请输入搜索关键词" input-align="center" />
  <van-dropdown-menu>
    <van-dropdown-item v-model="value1" :options="option1" />
    <van-dropdown-item v-model="value2" :options="option2" />
  </van-dropdown-menu>

  <!--模拟图表内容-->
  <div>
    <van-grid :border="false" :column-num="2">
      <van-grid-item>
        <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
      </van-grid-item>
    </van-grid>
    <van-grid :border="false" :column-num="2">
      <van-grid-item>
        <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" />
      </van-grid-item>
    </van-grid>
  </div>

  <!--<van-button @click="getRequestFail">点我发失败请求</van-button>-->
  <!--<van-button @click="getRequestSuccess">点我发成功请求</van-button>-->
  <!--<h3>{{ result }}</h3>-->
</template>

<script setup>
import myAxios from '@/plugins/myAxios'
import { ref } from 'vue'

let searchText = ref('')

const value1 = ref(0)
const value2 = ref('a')
const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
]
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
]

const result = ref('')

// 模拟后端请求
const getRequestFail = () => {
  myAxios.get('/getPort').then((res) => {
    result.value = res.toString()
  })
}

// 模拟后端请求
const getRequestSuccess = () => {
  myAxios.get('/').then((res) => {
    // console.log(res)
    result.value = res.toString()
  })
}
</script>

<style scoped></style>
