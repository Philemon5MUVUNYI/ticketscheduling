<script setup>

import { useBusStore } from "../stores/busStore"

const busStore = useBusStore()

import{ useTicketStore} from "@/stores/ticketStore.js";

const ticketStore = useTicketStore();

function bookTicket(bus){

  ticketStore.bookTicket({
    name: bus.name,
    from: bus.from,
    to: bus.to,
    price: bus.price
  })

  alert("Ticket booked successfully!")

}

</script>

<template>

  <!--<div class="container">

    <h1>Available Buses</h1>

    <table>

      <tr>
        <th>Bus Name</th>
        <th>From</th>
        <th>To</th>
        <th>Price</th>
      </tr>

      <tr v-for="(bus,index) in busStore.buses" :key="index">

        <td>{{ bus.name }}</td>
        <td>{{ bus.from }}</td>
        <td>{{ bus.to }}</td>
        <td>{{ bus.price }}</td>

      </tr>

      <tr v-for="(bus,index) in busStore.buses" :key="index">

        <td>{{ bus.name }}</td>
        <td>{{ bus.from }}</td>
        <td>{{ bus.to }}</td>
        <td>{{ bus.price }}</td>

        <td>
          <button @click="bookTicket(bus)">
            Book Ticket
          </button>
        </td>

      </tr>

    </table>

  </div>-->

  <div class="bus-page">

    <h1 class="title">Available Buses</h1>

    <table class="bus-table">

      <thead>
      <tr>
        <th>Bus Name</th>
        <th>From</th>
        <th>To</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
      </thead>

      <tbody>

      <tr v-for="(bus,index) in busStore.buses" :key="index">

        <td>{{ bus.name }}</td>
        <td>{{ bus.from }}</td>
        <td>{{ bus.to }}</td>
        <td>{{ bus.price }}</td>

        <td>
          <button class="book-btn" @click="bookTicket(bus)">
            Book Ticket
          </button>
        </td>

      </tr>

      </tbody>

    </table>

  </div>
  <footer class="footer">

    <p>© 2026 Bus Ticket Scheduling System</p>
    <p>Designed for easy and fast bus booking.</p>

  </footer>
</template>

<style scoped>

.container{
  padding:40px;
}

table{
  margin-top:20px;
  border-collapse:collapse;
  width:500px;
}

th,td{
  border:1px solid #ddd;
  padding:10px;
  text-align:center;
}

.bus-page{
  padding:40px;
  background:#f4f7fb;
  min-height:100vh;
}

.title{
  font-size:32px;
  margin-bottom:20px;
  color:#2c3e50;
}

/* Table */

.bus-table{
  width:100%;
  border-collapse:collapse;
  background:white;
  border-radius:10px;
  overflow:hidden;
  box-shadow:0 5px 15px rgba(0,0,0,0.1);
}

/* Header */

.bus-table thead{
  background:#2c3e50;
  color:white;
}

.bus-table th{
  padding:15px;
  text-align:left;
}

/* Rows */

.bus-table td{
  padding:15px;
  border-bottom:1px solid #eee;
}

/* Hover effect */

.bus-table tbody tr:hover{
  background:#f1f5f9;
}

/* Button */

.book-btn{
  background:#27ae60;
  border:none;
  color:white;
  padding:8px 15px;
  border-radius:5px;
  cursor:pointer;
  transition:0.3s;
}

.book-btn:hover{
  background:#1e874b;
}

.footer{
  text-align:center;
  margin-top:80px;
  padding:20px;
  background: #292930;
  color: #fbfff9;
}
</style>