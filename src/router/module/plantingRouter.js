export default [
    // 种植档案
    {
        path: '/plantingPage',
        name: 'plantingPage',
        meta: {
            title: '种植档案',
            requireAuth: false // 添加该字段，表示进入这个路由是需要登录的 true/false
        },
        component: () => import('@/views/plantingPage/plantingPage.vue')
    },
    // 种植档案详情
    {
        path: '/plantingDetailed',
        name: 'plantingDetailed',
        meta: {
            title: '种植信息',
            requireAuth: false // 添加该字段，表示进入这个路由是需要登录的 true/false
        },
        component: () => import('@/views/plantingPage/childPage/plantingDetailed.vue')
    },
    // 新建种植档案信息页面
    {
        path: '/createPlantingPage',
        name: 'createPlantingPage',
        meta: {
            title: '添加档案'
        },
        component: () => import('@/views/plantingPage/childPage/createPlantingPage/createPlantingPage.vue')
    }
]
