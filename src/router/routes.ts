import { RouteRecordRaw } from 'vue-router'

const lazyComponent = (path: string) => () => import(`../views/${path}.vue`).then(m => m.default || m)

const routes: RouteRecordRaw[] = [
    { path: '/', name: 'home', component: lazyComponent('Home') },
    { path: '/about', name: 'about', component: lazyComponent('About') }
]

export default routes
