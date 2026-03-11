<script setup>
import { useAuthStore } from "../stores/authStore"

import bus1 from "../assets/images/photo1.avif"
import bus2 from "../assets/images/photo2.avif"
import bus3 from "../assets/images/photo3.avif"

const auth = useAuthStore()
</script>

<template>

  <div class="home">

    <!-- Hero Section -->
    <section class="hero">

      <img :src="bus1" class="hero-img" />

      <div class="hero-text">
        <h1>Welcome {{ auth.user }}</h1>
        <p>Book your bus tickets quickly and travel across cities easily.</p>
      </div>

    </section>


    <!-- Feature Cards -->

    <section class="features">

      <router-link to="/buses" class="card">

        <img :src="bus2" />

        <h3>View Buses</h3>
        <p>See all available buses and routes.</p>

      </router-link>


      <router-link to="/buses" class="card">

        <img :src="bus3" />

        <h3>Book Tickets</h3>
        <p>Reserve seats quickly and easily.</p>

      </router-link>


      <router-link to="/my-tickets" class="card">

        <img :src="bus1" />

        <h3>My Tickets</h3>
        <p>View and manage your booked tickets.</p>

      </router-link>

    </section>

  </div>

</template>

<style scoped>

.home{
  padding:30px;
}

/* Hero */

.hero{
  position:relative;
  text-align:center;
  margin-bottom:50px;
}

.hero-img{
  width:100%;
  height:300px;
  object-fit:cover;
  border-radius:10px;
}

.hero-text{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  color:white;
  background:rgba(0,0,0,0.4);
  padding:20px;
  border-radius:8px;
}

/* Cards */

.features{
  display:flex;
  justify-content:center;
  gap:30px;
  flex-wrap:wrap;
}

.card{
  width:260px;
  background:white;
  border-radius:10px;
  overflow:hidden;
  text-decoration:none;
  color:black;
  box-shadow:0 4px 10px rgba(0,0,0,0.1);
  transition:0.3s;
}

.card:hover{
  transform:translateY(-5px);
}

.card img{
  width:100%;
  height:150px;
  object-fit:cover;
}

.card h3{
  margin:15px;
}

.card p{
  margin:0 15px 20px;
  color:#666;
}

</style>