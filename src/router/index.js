import { createRouter, createWebHistory } from 'vue-router'

import LandingView from "../views/LandingView.vue"
import LoginView from '../views/LoginView.vue'
import HomeView from "../views/HomeView.vue"
import UserDashboard from '../views/UserDashboard.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import ManageBuses from "../views/ManageBuses.vue"
import BusList from "../views/BusList.vue"
import MyTickets from "@/views/MyTickets.vue";
import AdminBookings from "@/views/AdminBookings.vue"

const routes = [
    {
        path: '/',
        name:'LandingView',
        component: LandingView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path:"/manage-buses",
        component:ManageBuses
    },
    {
        path: "/home",
        name: 'home',
        component: HomeView
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
    },
    {
        path: "/buses",
        name: 'buses',
        component: BusList
    },
    {
        path: "/my-tickets",
        name: 'tickets',
        component: MyTickets
    },
    {
        path: "/admin-bookings",
        name: 'bookings',
        component: AdminBookings
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router