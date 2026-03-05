import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import UserDashboard from '../views/UserDashboard.vue'
import AdminDashboard from '../views/AdminDashboard.vue'

const routes = [
    {
        path: '/login',
        name: 'logi',
        component: LoginView
    },
    {
        path: '/user-dashboard',
        name: 'user-dashboard',
        component: UserDashboard
    },
    {
        path: '/admin-dashboard',
        name: 'admin-dashboard',
        component: AdminDashboard
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router