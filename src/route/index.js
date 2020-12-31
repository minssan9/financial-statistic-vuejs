import {createRouter, createWebHistory}  from "vue-router";
// import store from '../store/index.js'
import Home from '../views/Home.vue'
const Menu = () => import("../views/Menu.vue")
// const requireAuth = (to, from, next) => {
//     !!store.state.access_token ? next() : next(`/login?returnPath=${encodeURIComponent(from.path)}`)
// }
// const requireManager = (to, from, next) => {
//     if (!!store.state.access_token) {               // 액세스토큰이 있으면
//         if (!!store.state.account.roles && !!(store.state.account.roles.includes('ADMIN')))        // 권한이 ADMIN 이면
//             return next()
//         else {
//             alert('권한이 없습니다.')
//             return next('/')
//         }
//     } else
//         return next(`/login?returnPath=${encodeURIComponent(from.path)}`)
// }
//
// const baseRoutes = [
//     {
//         path: '/',
//         // component: Home
//     },
// ]
//

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/menu',
        name: 'Menu',
        component: Menu
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router