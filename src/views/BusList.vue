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

  <div class="container">

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

  </div>

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

</style>