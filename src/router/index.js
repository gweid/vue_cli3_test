import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

// 按需加载路由
const Home = () => import('@/pages/home/home.vue')

const routes = [{
    name: "home",
    path: "/",
    component: Home,
    meta: {
        requireAuth: false
    }

}]

const router = new VueRouter({
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        // if (state.userInfo.token) {
        //     next()
        // } else {
        //     next({
        //         path: '/login'
        //     })
        // }
    } else {
        next()
    }
})

export default router