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
    router.push("/home")
  }

  else if (email.value === "user@gmail.com" && password.value === "user") {
    auth.login("User", "user")
    router.push("/home")
  }

  else {
    alert("Invalid credentials")
  }

}
</script>

<template>

  <div class="login-container">

    <div class="login-card">

      <h2>Login</h2>

      <form @submit.prevent="login">

        <div class="input-group">
          <label>Email</label>
          <input type="email" v-model="email" placeholder="Enter email" required>
        </div>

        <div class="input-group">
          <label>Password</label>
          <input type="password" v-model="password" placeholder="Enter password" required>
        </div>

        <button type="submit">Login</button>

      </form>

      <router-link to="/">
        <p class="home-link">Back to landing page</p>
      </router-link>

    </div>

  </div>

</template>

<style scoped>

.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f6f8;
}

.login-card {
  background: white;
  padding: 40px;
  border-radius: 8px;
  width: 320px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
}

.login-card h2 {
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b883;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369870;
}

.home-link {
  text-align: center;
  margin-top: 15px;
  color: #10014d;
  cursor: pointer;
}

.home-link:hover{
  color : red;
}
</style>