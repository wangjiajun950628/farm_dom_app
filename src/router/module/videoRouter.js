export default [
    // 视频监控
    {
        path: '/videoMonitoring',
        name: 'videoMonitoring',
        meta: {
            title: '视频监控',
            requireAuth: false // 添加该字段，表示进入这个路由是需要登录的 true/false
        },
        component: () => import('@/views/videoMonitoring/videoMonitoring.vue')
    }
]
