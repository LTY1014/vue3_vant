<template>
  <div id="usePage">
    <div class="topRow">
      <van-image style="padding: 2rem" round width="5rem" height="5rem" :src="user.avatarUrl" />
      <van-button style="margin-top: 40px; margin-right: 2rem" round type="primary">编辑资料</van-button>
    </div>
    <van-grid>
      <van-grid-item icon="guide-o" text="设备" />
      <van-grid-item icon="link-o" text="信息" />
      <van-grid-item icon="contact" text="权限" />
      <van-grid-item icon="underway-o" text="历史" />
    </van-grid>
    <template v-if="user">
      <van-cell title="当前用户名" :value="user.username" />
      <!--todo 修改路由-->
      <van-cell title="个人设置" is-link to="/user" />
      <van-cell title="是否禁用" to="/user">
        <van-switch v-model="user.status" />
      </van-cell>
      <van-cell title="应用设置" is-link to="/user" />
      <van-cell title="其他设置" is-link to="/user" />
      <van-cell title="常见问题" is-link to="/user" />

      <van-button style="margin-top: 1rem" block type="warning">退出当前账号</van-button>
    </template>
  </div>
</template>

<script setup>
let user = {
  username: 'admin',
  phone: '13812345678',
  status: true,
  avatarUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
}
</script>

<style scoped>
.topRow {
  display: flex;
  justify-content: space-between;
}
</style>
