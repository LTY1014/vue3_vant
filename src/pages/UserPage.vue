<template>
  <div id="usePage">
    <div class="topRow">
      <van-image v-if="user" style="padding: 2rem" round width="5rem" height="5rem" :src="user.avatarUrl" />
      <van-button style="margin-top: 40px; margin-right: 2rem" round type="primary">编辑资料</van-button>
    </div>
    <van-grid>
      <van-grid-item icon="guide-o" text="设备" />
      <van-grid-item icon="link-o" text="信息" />
      <van-grid-item icon="contact" text="权限" />
      <van-grid-item icon="underway-o" text="历史" />
    </van-grid>
    <template v-if="user">
      <van-cell title="当前用户名" :value="user.userName" />
      <!--todo 修改路由-->
      <van-cell title="个人设置" is-link to="/user" />
      <van-cell title="应用设置" is-link to="/user" />
      <van-cell title="其他设置" is-link to="/user" />
      <van-cell title="常见问题" is-link to="/user" />

      <van-button class="margin-16" block type="primary" @click="toUserLogin">用户登录</van-button>
      <van-button block type="warning" @click="onLogout">退出当前账号</van-button>
    </template>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { showSuccessToast } from 'vant'
import { userLogout } from '@/api'

const router = useRouter()

// let user = {
//   userName: 'admin',
//   phone: '13812345678',
//   status: true,
//   avatarUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
// }

const user = ref()

onMounted(() => {
  let loginUser = sessionStorage.getItem('loginUser')
  if (loginUser != null) {
    // 将JSON格式的对象解析为js对象，currentUser为一个js对象
    user.value = JSON.parse(loginUser)
  }
  if (!user.value) {
    router.push('/user/login')
  }
})

const toUserLogin = () => {
  router.push('/user/login')
}

const onLogout = async () => {
  const res = await userLogout()
  if (res.code === 0) {
    showSuccessToast('退出成功')
    // 移除本地用户信息
    sessionStorage.setItem('loginUser', JSON.stringify(''))
    // 刷新页面
    router.go(0)
  }
}
</script>

<style scoped>
.topRow {
  background-color: #45bcd9;
  display: flex;
  justify-content: space-between;
}

.margin-16 {
  margin-bottom: 16px;
}
</style>
