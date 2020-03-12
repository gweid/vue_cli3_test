import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  lStorage
} from "@/common/storage";

Vue.use(VueRouter)

// 按需加载路由
const Login = () => import('@/pages/login/login.vue')
const Home = () => import('@/pages/home/home.vue')
const Mine = () => import('@/pages/mine/mine.vue')
const News = () => import('@/pages/news/news.vue')
const NewsDetail = () => import('@/pages/newsDetail/newsDetail.vue')

const routes = [{
    path: "/login",
    component: Login
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
      requireAuth: true
    }
  },
  {
    name: 'mine',
    path: '/mine/:id',
    props: true, // 允许传的 id 在页面中以 props 接收
    component: Mine,
    meta: {
      requireAuth: true
    }
  },
  {
    name: 'news',
    path: '/news',
    props: true,
    component: News,
    meta: {
      requireAuth: true
    },
    children: [{
      path: 'detail',
      component: NewsDetail
    }]
  }
]

const router = new VueRouter({
  mode: 'hash',
  // base: "",
  routes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 是否需要登录
    let token = lStorage.getItem('token')
    if (token) { // 是否有 token
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.path // 登录后回撤到哪里
        }
      })
    }
  } else {
    next()
  }
})

export default router