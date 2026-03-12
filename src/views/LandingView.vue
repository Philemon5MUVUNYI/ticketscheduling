<script setup>
</script>

<template>

  <div class="landing">

    <header class="hero">

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

.hero {
  padding: 60px 20px;
}

.hero h1 {
  font-size: 40px;
  margin-bottom: 10px;
}

.hero p {
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