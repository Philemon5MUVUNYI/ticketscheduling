<script setup>
import { useTicketStore } from "@/stores/ticketStore"

const ticketStore = useTicketStore()
</script>

<template>

  <!--<div class="bus-table">

    <h1 class="title">My Tickets</h1>

    <table class="bus-table">

      <thead>
      <tr>
        <th>Bus</th>
        <th>From</th>
        <th>To</th>
        <th>Price</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(ticket,index) in ticketStore.tickets" :key="index">

        <td>{{ ticket.name }}</td>
        <td>{{ ticket.from }}</td>
        <td>{{ ticket.to }}</td>
        <td>{{ ticket.price }}</td>

      </tr>
      </tbody>

    </table>

  </div>-->

  <div class="tickets-page">

    <h1 class="title">My Tickets</h1>

    <table class="tickets-table">

      <thead>
      <tr>
        <th>Bus</th>
        <th>From</th>
        <th>To</th>
        <th>Price</th>
      </tr>
      </thead>

      <tbody>

      <tr v-for="(ticket,index) in ticketStore.tickets" :key="index">

        <td>{{ ticket.name }}</td>
        <td>{{ ticket.from }}</td>
        <td>{{ ticket.to }}</td>
        <td>{{ ticket.price }}</td>

      </tr>

      </tbody>

    </table>

  </div>

  <footer class="footer">

    <p>© 2026 Bus Ticket Scheduling System</p>
    <p>Designed for easy and fast bus booking.</p>

  </footer>

</template>
<style>

.tickets-page{
  padding:40px;
  background:#f4f7fb;
  min-height:100vh;
}

.title{
  font-size:32px;
  margin-bottom:20px;
  color:#2c3e50;
}

.tickets-table{
  width:100%;
  border-collapse:collapse;
  background:white;
  border-radius:10px;
  overflow:hidden;
  box-shadow:0 5px 15px rgba(0,0,0,0.1);
}

.tickets-table thead{
  background:#34495e;
  color:white;
}

.tickets-table th,
.tickets-table td{
  padding:15px;
  text-align:left;
}

.tickets-table tbody tr:hover{
  background:#ecf0f1;
}

.footer{
  text-align:center;
  margin-top:80px;
  padding:20px;
  background: #292930;
  color: #fbfff9;
}
</style>