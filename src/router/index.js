import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

// const requireAuth = (to, from, next) => {
//     !!store.state.access_token ? next() : next(`/login?returnPath=${encodeURIComponent(from.path)}`)
// }
//
// const requireManager = (to, from, next) => {
//
//     // 액세스토큰이 있으면
//     if (!!store.state.access_token) {
//         // 권한이 ADMIN 이면
//         if (!!store.state.account.roles && !!(store.state.account.roles.includes('ADMIN') ))
//             return next()
//         else {
//             alert('권한이 없습니다.')
//             return next('/')
//         }
//     } else
//         return next(`/login?returnPath=${encodeURIComponent(from.path)}`)
// }

const router = new VueRouter({
    mode: 'history',

    // 스크롤 클릭시 맨 위로
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    },

    routes: [
        {
            path: '/',
            component: Home
        },
        // {
        //     path: '/join',
        //     component: Join
        // },
        // {
        //     path: '/login',
        //     component: Login
        // },
    ]
})

export default router
