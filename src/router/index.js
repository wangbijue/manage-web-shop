import Vue from 'vue'
import vueRouter from 'vue-router'
import Login from '@/views/login'

Vue.use(vueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]
const router = new vueRouter(
    routes
)

export default router;
