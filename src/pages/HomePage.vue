<template>
  <van-notice-bar left-icon="volume-o" :text="notice" />
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
  <van-grid>
    <van-grid-item icon="guide-o" text="美食" />
    <van-grid-item icon="link-o" text="小吃" />
    <van-grid-item icon="guide-o" text="饮品" />
    <van-grid-item icon="link-o" text="面包" />
  </van-grid>

  <van-submit-bar style="margin-bottom: 70px" :price="888" button-text="提交订单" @submit="onSubmit" />
</template>

<script setup>
import { showSuccessToast } from 'vant'

let notice = '欢迎来到:'

const onSubmit = () => {
  showSuccessToast('购买成功')
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
