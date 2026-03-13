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
  <!--<section >
    <div class="admin-dashboard">

      <h1>Admin Dashboard</h1>
      <p>Welcome Admin</p>

      <div class="cards">

        <div class="card">
          <img src="@/assets/images/bus1.jpg">
          <h3>Manage Buses</h3>
          <p>Add, edit or remove buses</p>
          <button>Open</button>
        </div>

        <div class="card">
          <img src="@/assets/images/bus2.jpg">
          <h3>View Bookings</h3>
          <p>Check all booked tickets</p>
          <button>Open</button>
        </div>

      </div>

    </div>
  </section>-->

  <div class="dashboard">

    <h1>Admin Dashboard</h1>

    <p>Welcome {{ auth.user }}</p>

    <div class="route-grid">

      <div class="route-card">
        <img src="../assets/images/bus5.jpg">
        <h3>Manage Buses</h3>
        <p>Add, edit or remove buses</p>
        <router-link to="/manage-buses">
          <button>Open</button>
        </router-link>
      </div>

      <!--<div class="route-card">
        <img src="../assets/images/bus6.jpg">
        <h3>Manage Schedules</h3>
        <p>Create and update bus schedules</p>
        <button>Open</button>
      </div>-->

      <div class="route-card">
        <img src="../assets/images/bus8.jpg">
        <h3>View Bookings</h3>
        <p>Check all booked tickets</p>
        <router-link to="/admin-bookings">
          <button>Open</button>
        </router-link>
      </div>

    </div>

    <button class="logout" @click="logout">Logout</button>

  </div>
  <section class="routes">

    <h2>Popular Routes</h2>

    <div class="route-grid">

      <div class="route-card">
        <img src="../assets/images/bus1.jpg">
        <p>Kigali → Huye</p>
      </div>

      <div class="route-card">
        <img src="../assets/images/bus2.jpg">
        <p>Kigali → Musanze</p>
      </div>

      <div class="route-card">
        <img src="../assets/images/bus3.jpg">
        <p>Kigali → Rubavu</p>
      </div>

    </div>

  </section>


  <section class="cta">

    <h2>Ready to travel?</h2>
    <p>Book your bus ticket now and enjoy a comfortable journey.</p>

    <button class="book-btn">
      Book Now
    </button>

  </section>
  <!--<section class="stats">

    <div class="stat">
      <h2>50+</h2>
      <p>Buses Available</p>
    </div>

    <div class="stat">
      <h2>120+</h2>
      <p>Daily Trips</p>
    </div>

    <div class="stat">
      <h2>10K+</h2>
      <p>Happy Travelers</p>
    </div>

  </section>-->

  <footer class="footer">

    <p>© 2026 Bus Ticket Scheduling System</p>
    <p>Designed for easy and fast bus booking.</p>

  </footer>

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
  padding:2px;
  width:5px;
  border-radius:8px;
  box-shadow:0 2px 6px rgba(0,0,0,0.1);
}
/*.admin-dashboard{
  min-height:100vh;
  background-image: url("@/assets/bus3.jpg");
  background-size: cover;
  background-position: center;
  padding: 40px;
  text-align:center;
}*/
/*.admin-dashboard{
  min-height:100vh;
  background-image: url("@/assets/bus3.jpg");
  background-size: cover;
  background-position: center;
  padding:40px;
  text-align:center;
  position:relative;
}*/

.admin-dashboard::before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.5);
}

.admin-dashboard > *{
  position:relative;
  color:white;
}
.admin-dashboard::before{
  backdrop-filter: blur(3px);
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

.stats{
  display:flex;
  justify-content:center;
  gap:80px;
  margin:50px 0;
  text-align:center;
}

.stat h2{
  font-size:36px;
  color:#2c3e50;
}

.stat p{
  color:#777;
}

.routes{
  margin:60px 0;
  text-align:center;
}

.route-grid{
  display:flex;
  justify-content:center;
  gap:30px;
  margin-top:20px;
}

.route-card{
  width:220px;
  border-radius:10px;
  overflow:hidden;
  box-shadow:0 4px 10px rgba(0,0,0,0.1);
}

.route-card img{
  width:100%;
  height:140px;
  object-fit:cover;
}

.route-card p{
  padding:10px;
  font-weight:bold;
}

.cta{
  background:#2c3e50;
  color:white;
  padding:50px;
  text-align:center;
  border-radius:10px;
  margin:60px 0;
}

.book-btn{
  background:#e74c3c;
  border:none;
  padding:12px 25px;
  color:white;
  font-size:16px;
  border-radius:5px;
  cursor:pointer;
  margin-top:15px;
}

.footer{
  text-align:center;
  margin-top:80px;
  padding:20px;
  background:#f4f4f4;
  color:#777;
}
</style>