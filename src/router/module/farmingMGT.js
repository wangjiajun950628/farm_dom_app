export default [
    // 农事管理
    {
        path: '/farmingMGT',
        name: 'farmingMGT',
        meta: {
            title: '农事管理',
            requireAuth: false // 添加该字段，表示进入这个路由是需要登录的 true/false
        },
        component: () => import('@/views/farmingMGT/farmingMGT.vue')
    },
    // 农事记录
    {
        path: '/farmingMGTDetailed',
        name: 'farmingMGTDetailed',
        meta: {
            title: '农事记录',
            requireAuth: false // 添加该字段，表示进入这个路由是需要登录的 true/false
        },
        component: () => import('@/views/farmingMGT/childPage/farmingMGTDetailed.vue')
    },
    // 农事管理添加数据页面
    {
        path: '/farmingMGTCreate',
        name: 'farmingMGTCreate',
        meta: {
            title: '新建农事管理',
            requireAuth: false // 添加该字段，表示进入这个路由是需要登录的 true/false
        },
        component: () => import('@/views/farmingMGT/childPage/farmingMGTCreate/farmingMGTCreate.vue')
    }
]
