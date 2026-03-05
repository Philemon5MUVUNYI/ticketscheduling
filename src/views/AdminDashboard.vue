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

  <div class="dashboard">

    <h1>Admin Dashboard</h1>

    <p>Welcome {{ auth.user }}</p>

    <div class="cards">

      <div class="card">
        <h3>Manage Buses</h3>
        <p>Add, edit or remove buses</p>
        <router-link to="/manage-buses">
          <button>Open</button>
        </router-link>
      </div>

      <div class="card">
        <h3>Manage Schedules</h3>
        <p>Create and update bus schedules</p>
        <button>Open</button>
      </div>

      <div class="card">
        <h3>View Bookings</h3>
        <p>Check all booked tickets</p>
        <button>Open</button>
      </div>

    </div>

    <button class="logout" @click="logout">Logout</button>

  </div>

</template>

<style scoped>

.dashboard{
  padding:40px;
  text-align:center;
}

.cards{
  display:flex;
  justify-content:center;
  gap:20px;
  margin-top:30px;
}

.card{
  border:1px solid #ddd;
  padding:20px;
  width:200px;
  border-radius:8px;
  box-shadow:0 2px 6px rgba(0,0,0,0.1);
}

.card button{
  margin-top:10px;
  padding:8px 12px;
  background:#42b883;
  border:none;
  color:white;
  cursor:pointer;
}

.logout{
  margin-top:40px;
  padding:10px 20px;
  background:#e74c3c;
  color:white;
  border:none;
  cursor:pointer;
}

</style>