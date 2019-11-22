export default [
    // 农事日历
    {
        path: '/farmingRlPage',
        name: 'farmingRlPage',
        meta: {
            title: '农事日历',
            requireAuth: false // 添加该字段，表示进入这个路由是需要登录的 true/false
        },
        component: () => import('@/views/farmingRlPage/farmingRlPage.vue')
    },
    // 农事计划
    {
        path: '/farmingPlan',
        name: 'farmingPlan',
        meta: {
            title: '农事计划',
            requireAuth: false // 添加该字段，表示进入这个路由是需要登录的 true/false
        },
        component: () => import('@/views/farmingRlPage/childPage/farmingPlan.vue')
    },
    // 农事记录
    {
        path: '/farmingRecord',
        name: 'farmingRecord',
        meta: {
            title: '农事记录',
            requireAuth: false // 添加该字段，表示进入这个路由是需要登录的 true/false
        },
        component: () => import('@/views/farmingRlPage/childPage/farmingRecord.vue')
    }
]
