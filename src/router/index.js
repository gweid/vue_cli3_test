import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 按需加载路由
const Home = () => import('@/pages/home/home.vue')
const Mine = () => import('@/pages/mine/mine.vue')
const News = () => import('@/pages/news/news.vue')
const NewsDetail = () => import('@/pages/newsDetail/newsDetail.vue')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
      requireAuth: false
    }
  },
  {
    name: 'mine',
    path: '/mine/:id',
    props: true,
    component: Mine,
    meta: {
      requireAuth: false
    }
  },
  {
    name: 'news',
    path: '/news',
    props: true,
    component: News,
    meta: {
      requireAuth: false
    },
    children: [
      {
        path: 'detail',
        component: NewsDetail
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
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
