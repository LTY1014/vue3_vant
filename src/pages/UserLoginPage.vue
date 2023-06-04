<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="userAccount"
        name="userAccount"
        label="账号"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="userPassword"
        type="password"
        name="userPassword"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> 提交</van-button>
    </div>
  </van-form>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { showFailToast, showSuccessToast } from 'vant'
import { userLogin } from '@/api'
import { useUserStore } from '@/store/userStore'

const router = useRouter()

const userAccount = ref('')
const userPassword = ref('')

const onSubmit = async () => {
  let user = { userAccount: userAccount.value, userPassword: userPassword.value }
  // userLogin(user).then((res) => {
  //   if (res.code === 0 && res.data) {
  //     Toast.success('登录成功')
  //   }
  // })
  const res = await userLogin(user)
  if (res.code === 0 && res.data) {
    showSuccessToast('登录成功')
    // 用户信息存储到store
    useUserStore().$state.loginUser = res.data
    // TODO 登录完跳转到页面
    router.push('/user')
  } else {
    showFailToast('登录失败')
  }
}
</script>

<style scoped></style>
