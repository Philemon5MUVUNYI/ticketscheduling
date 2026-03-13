<script setup>
import heroImage from "@/assets/images/bus2.jpg"
</script>

<template>
  <section class="hero" :style="{ backgroundImage: `url(${heroImage})` }">

    <div class="hero-content">
      <h1>Bus Ticket Scheduling System</h1>
      <p>Book bus tickets easily and manage schedules across cities.</p>

      <!--<router-link to="/login" class="btn-login">Login</router-link>
      <router-link to="/login" class="btn-book">Book Ticket</router-link>-->
    </div>

  </section>
 <!-- <section class="hero">

    <div class="hero-content">
      <h1>Bus Ticket Scheduling System</h1>
      <p>Book bus tickets easily and manage schedules across cities.</p>

      <router-link to="/login" class="btn-login">Login</router-link>
      <router-link to="/buses" class="btn-book">Book Ticket</router-link>
    </div>

  </section>
  <section class="gallery">

    <h2>Our Transport Network</h2>

    <div class="gallery-grid">

      <img src="../assets/images/bus1.jpg">
      <img src="../assets/images/bus2.jpg">
      <img src="../assets/images/bus3.jpg">

    </div>

  </section>-->

  <div class="landing">

    <header class="hero1">

      <h1>Bus Ticket Scheduling System</h1>

      <p>
        Book bus tickets easily and manage schedules across cities.
      </p>

      <div class="buttons">

        <router-link to="/login">
          <button class="primary">Login</button>
        </router-link>

        <router-link to="/login">
          <button class="secondary">Book Ticket</button>
        </router-link>

      </div>

    </header>

    <section class="how-it-works">
      <h2>How It Works</h2>

      <div class="steps">

        <div class="step">
          <h3>1. Search Buses</h3>
          <p>Find buses available between cities and compare prices easily.</p>
        </div>

        <div class="step">
          <h3>2. Book Your Seat</h3>
          <p>Select your bus and book your ticket in seconds.</p>
        </div>

        <div class="step">
          <h3>3. Manage Tickets</h3>
          <p>View and manage your booked tickets anytime.</p>
        </div>

      </div>
    </section>


    <section class="features">

      <div class="feature">
        <h3>Easy Booking</h3>
        <p>Book tickets quickly with a simple interface.</p>
      </div>

      <div class="feature">
        <h3>Manage Schedules</h3>
        <p>Admins can manage bus schedules efficiently.</p>
      </div>

      <div class="feature">
        <h3>Track Tickets</h3>
        <p>View and manage all your booked tickets.</p>
      </div>

    </section>

  </div>
  <section class="cta">

    <h2>Start Booking Your Bus Tickets Today</h2>
    <p>Login or explore available buses now.</p>

    <div class="cta-buttons">
      <!--<router-link to="/login" class="btn-login">Login</router-link>
      <router-link to="/login" class="btn-book">Book Ticket</router-link>-->
    </div>

  </section>
  <section class="benefits">

    <h2>Why Use Our Bus Ticket System?</h2>

    <div class="benefit-grid">

      <div class="benefit">
        <h3>Fast Booking</h3>
        <p>Book your ticket within seconds.</p>
      </div>

      <div class="benefit">
        <h3>Reliable Schedules</h3>
        <p>Stay updated with accurate bus schedules.</p>
      </div>

      <div class="benefit">
        <h3>Easy Management</h3>
        <p>Admins can manage buses and bookings efficiently.</p>
      </div>

    </div>

  </section>

  <footer class="footer">

    <p>© 2026 Bus Ticket Scheduling System</p>
    <p>Designed for easy and fast bus booking.</p>

  </footer>
</template>

<style scoped>

.landing {
  text-align: center;
  padding: 40px;
  font-family: Arial, sans-serif;
}
/*.gallery{
  margin-top:80px;
  text-align:center;
}*/

/*.gallery-grid{
  display:flex;
  gap:20px;
  justify-content:center;
  margin-top:20px;
}*/

/*.gallery-grid img{
  width:300px;
  border-radius:10px;
}*/

.hero1 {
  padding: 60px 20px;
}
.hero{
  height: 550px;
  background-size: cover;
  background-position: center;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
}

.hero::before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.5);
}

.hero-content{
  position:relative;
  color:white;
  text-align:center;
}

.cta {
  margin-top: 80px;
  padding: 40px;
  background: #2c3e50;
  color: white;
  text-align: center;
}

.cta-buttons {
  margin-top: 20px;
}

.cta-buttons a {
  margin: 10px;
}

/*.hero{
  height:500px;
  background-image: url("/bus1.jpg");
  background-size: cover;
  background-position: center;
  display:flex;
  align-items:center;
  justify-content:center;
}*/

/*.hero-content{
  background: rgba(0,0,0,0.5);
  padding:40px;
  color:white;
  border-radius:10px;
  text-align:center;
}*/
.hero1 h1 {
  font-size: 40px;
  margin-bottom: 10px;
}

.hero1 p {
  font-size: 18px;
  color: #555;
}

.buttons {
  margin-top: 25px;
}

button {
  padding: 12px 20px;
  margin: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
.how-it-works {
  margin-top: 80px;
  text-align: center;
}

.how-it-works h2 {
  font-size: 28px;
  margin-bottom: 30px;
}
.benefits {
  margin-top: 80px;
  text-align: center;
}

.benefit-grid {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
}

.benefit {
  width: 250px;
}

.steps {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.step {
  width: 250px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 10px;
}

.primary {
  background-color: #42b883;
  color: white;
}

.secondary {
  background-color: #35495e;
  color: white;
}

.features {
  display: flex;
  justify-content: center;
  margin-top: 60px;
  gap: 40px;
}

.feature {
  max-width: 200px;
}

.feature h3 {
  margin-bottom: 10px;
}
.footer{
  text-align:center;
  margin-top:80px;
  padding:20px;
  background: #292930;
  color: #fbfff9;
}

</style>