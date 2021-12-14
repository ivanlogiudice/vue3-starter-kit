import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const route = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    routes
})

export default route
