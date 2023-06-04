import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import routes from './router/route'
import vantConfig from 'vant'
import 'vant/lib/index.css'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(vantConfig)
const router = VueRouter.createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHistory(),
  routes, // `routes: routes` 的缩写
})
const store = createPinia()
app.use(router)
app.use(store)
app.mount('#app')
