<script setup>
import { useTicketStore } from "@/stores/ticketStore"

const ticketStore = useTicketStore()
</script>

<template>

  <div>
    <h1>My Tickets</h1>

    <table>

      <tr>
        <th>Bus</th>
        <th>From</th>
        <th>To</th>
        <th>Price</th>
      </tr>

      <tr v-for="(ticket,index) in ticketStore.tickets" :key="index">

        <td>{{ ticket.name }}</td>
        <td>{{ ticket.from }}</td>
        <td>{{ ticket.to }}</td>
        <td>{{ ticket.price }}</td>

      </tr>

    </table>

  </div>

</template>