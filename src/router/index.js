import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import { getToken } from '@/utils/cookie'
// 路由配置
import index from './module/index'
import baseRouter from './module/baseRouter'
import videoRouter from './module/videoRouter'
import farmingRouter from './module/farmingRouter'
import plantingRouter from './module/plantingRouter'
import farmingMGT from './module/farmingMGT'
import farmingRlRouter from './module/farmingRlRouter'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/', // 部署到tomcat时这个配置必须要
  routes: [
    ...index,
      ...baseRouter, // 基地信息管理路由
      ...videoRouter, // 视频监控管理路由
      ...farmingRouter, // 养殖档案管理路由
      ...farmingMGT, // 农事管理管理路由
      ...plantingRouter, // 种植档案管理路由
      ...farmingRlRouter // 农事日历管理路由
  ]
})
// 路由拦截
router.beforeEach((to, from, next) => {
  const LOGIN_PAGE_NAME = 'login'
  const token = getToken()
  store.commit('setFromName', from.name)
  // console.log(to.name, from.name)
  if (to.name !== LOGIN_PAGE_NAME && to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (token !== false) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next({
        path: '/login' // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
