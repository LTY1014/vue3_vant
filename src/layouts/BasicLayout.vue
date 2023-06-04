<template>
  <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="router.back()">
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <div>
      <router-view />
    </div>
    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o" name="HomePage">主页</van-tabbar-item>
      <van-tabbar-item to="/discovery" icon="search" name="DiscoveryPage">发现</van-tabbar-item>
      <van-tabbar-item to="/user" icon="friends-o" name="UserPage">个人</van-tabbar-item>
    </van-tabbar>
  </van-pull-refresh>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import routes from '../router/route'
import { showToast } from 'vant'

const router = useRouter()

const DEFAULT_TITLE = '主页'
let title = ref(DEFAULT_TITLE)

router.beforeEach((to) => {
  const toPath = to.path
  const route = routes.find((route) => {
    return toPath === route.path
  })
  title.value = route.title || DEFAULT_TITLE
})

// 刷新
let count = ref(0)
const loading = ref(false)

const onRefresh = () => {
  setTimeout(() => {
    showToast('刷新成功')
    loading.value = false
    count.value++
  }, 1000)
  console.log(count.value)
}
</script>

<style scoped></style>
