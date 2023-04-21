import HomePage from '../pages/HomePage.vue'
import DiscoveryPage from '../pages/DiscoveryPage.vue'
import UserPage from '../pages/UserPage.vue'

const routes = [
  { path: '/', title: '主页', component: HomePage },
  { path: '/discovery', title: '发现', component: DiscoveryPage },
  { path: '/user', title: '个人', component: UserPage },
]

export default routes
