<script setup>
import { useAuthStore } from "../stores/authStore"

const auth = useAuthStore()
</script>

<template>

  <div class="home">

    <h1>Welcome {{ auth.user }}</h1>

    <p>
      This is the Bus Ticket Scheduling System home page.
      Use the navigation menu to manage buses, schedules, or tickets.
    </p>

    <div class="features">

      <div class="feature">
        <h3>View Buses</h3>
        <p>See all available buses and routes.</p>
      </div>

      <div class="feature">
        <h3>Book Tickets</h3>
        <p>Reserve seats quickly and easily.</p>
      </div>

      <div class="feature">
        <h3>Manage Trips</h3>
        <p>Admins can manage buses and schedules.</p>
      </div>

    </div>

  </div>

</template>

<style scoped>

.home{
  padding:40px;
  text-align:center;
}

.features{
  display:flex;
  justify-content:center;
  gap:40px;
  margin-top:40px;
}

.feature{
  border:1px solid #ddd;
  padding:20px;
  width:220px;
  border-radius:8px;
}

</style>