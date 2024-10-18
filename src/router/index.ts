import { createRouter, createWebHistory } from 'vue-router'

const staticRoutes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue'),
        meta: {
            title: '登录',
        },
    },
]
export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...staticRoutes],
})
//路由前置操作
router.beforeEach((to, from, next) => {
    //白名单
    const whiteList = ['/login']
    if (whiteList.includes(to.path)) {
        console.log('白名单')
        // 返回 false 以取消导航
        return false
    } else {
        next({ name: 'login' })
        //可以进行用户验证的操作
    }
})
// 路由后置操作
router.afterEach((to, from) => {
    console.log('路由后置操作')
})
