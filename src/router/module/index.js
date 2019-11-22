export default [
    // 首页
    {
        path: '/',
        name: 'index',
        meta: {
            title: '首页',
            requireAuth: false // 添加该字段，表示进入这个路由是需要登录的 true/false
        },
        component: () => import('@/views/index.vue')
    },
    // 登录页面
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录页面',
            requireAuth: false // 添加该字段，表示进入这个路由是需要登录的 true/false
        },
        component: () => import('@/views/login.vue')
    }
]
