import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        role: null
    }),

    actions: {
        login(username, role) {
            this.user = username
            this.role = role
        },

        logout() {
            this.user = null
            this.role = null
        }
    }
})