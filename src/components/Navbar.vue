<script setup>
import { useAuthStore } from "../stores/authStore"
import { useRouter } from "vue-router"

const auth = useAuthStore()
const router = useRouter()

function logout(){
  auth.logout()
  router.push("/login")
}
</script>

<template>

  <nav class="navbar">

    <div class="logo">
      BusTicket
    </div>

    <div class="links">

      <router-link v-if="auth.role === 'user'" to="/home">
        Home
      </router-link>
      <router-link v-if="auth.role === 'admin'" to="/admin-dashboard">
        Dashboard
      </router-link>
      <router-link v-if="auth.role === 'admin'" to="/admin-bookings">
        Bookings
      </router-link>
      <router-link v-if="auth.role === 'user'" to="/user-dashboard">
        Dashboard
      </router-link>
      <router-link v-if="auth.role === 'user'" to="/buses">
        Available buses
      </router-link>
      <router-link v-if="auth.role === 'user'" to="/my-tickets">
        My tickets
      </router-link>


      <button @click="logout">Logout</button>

    </div>

  </nav>

</template>

<style scoped>

.navbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:15px 30px;
  background:#35495e;
  color:white;
}

.logo{
  font-size:20px;
  font-weight:bold;
}

.links{
  display:flex;
  gap:20px;
  align-items:center;
}

a{
  color:white;
  text-decoration:none;
}

button{
  padding:6px 12px;
  background:#e74c3c;
  border:none;
  color:white;
  cursor:pointer;
}

</style>