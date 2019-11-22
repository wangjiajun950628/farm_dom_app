export default [
    // 养殖档案
    {
        path: '/farmingPage',
        name: 'farmingPage',
        meta: {
            title: '养殖档案',
            requireAuth: false // 添加该字段，表示进入这个路由是需要登录的 true/false
        },
        component: () => import('@/views/farmingPage/farmingPage.vue')
    },
    // 养殖详细页面
    {
        path: '/farmingDetailed',
        name: 'farmingDetailed',
        meta: {
            title: '养殖详情',
            requireAuth: false // 添加该字段，表示进入这个路由是需要登录的 true/false
        },
        component: () => import('@/views/farmingPage/childPage/farmingDetailed.vue')
    },
    // 养殖档案数据创建页面
    {
        path: '/farmingCreate',
        name: 'farmingCreate',
        meta: {
            title: '新建养殖档案',
            requireAuth: false // 添加该字段，表示进入这个路由是需要登录的 true/false
        },
        component: () => import('@/views/farmingPage/childPage/farmingCreate/farmingCreate.vue')
    }
]
