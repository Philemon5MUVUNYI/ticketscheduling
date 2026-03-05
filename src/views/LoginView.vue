<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useAuthStore } from "../stores/authStore"

const email = ref("")
const password = ref("")

const router = useRouter()
const auth = useAuthStore()

function login() {

  if (email.value === "admin@gmail.com" && password.value === "admin") {
    auth.login("Admin", "admin")
    router.push("/admin-dashboard")
  }

  else if (email.value === "user@gmail.com" && password.value === "user") {
    auth.login("User", "user")
    router.push("/user-dashboard")
  }

  else {
    alert("Invalid credentials")
  }

}
</script>

<template>

  <h1>Bus Ticket System Login</h1>

  <form @submit.prevent="login">

    <div>
      <label>Email</label>
      <input type="email" v-model="email" required>
    </div>

    <div>
      <label>Password</label>
      <input type="password" v-model="password" required>
    </div>

    <button type="submit">Login</button>

  </form>

</template>