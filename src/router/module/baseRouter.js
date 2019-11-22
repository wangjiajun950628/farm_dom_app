export default [
    // 基地信息
    {
        path: '/basePage',
        name: 'basePage',
        meta: {
            title: '基地信息',
            requireAuth: false // 添加该字段，表示进入这个路由是需要登录的 true/false
        },
        component: () => import('@/views/basePage/basePage.vue')
    }
]
