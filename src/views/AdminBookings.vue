<script setup>


import { useTicketStore } from "@/stores/ticketStore"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

const ticketStore = useTicketStore()

function downloadPDF(){

  const doc = new jsPDF()

  doc.text("Bus Ticket Bookings", 14, 10)

  autoTable(doc,{
    head: [["Bus","From","To","Price"]],
    body: ticketStore.tickets.map(ticket => [
      ticket.name,
      ticket.from,
      ticket.to,
      ticket.price
    ])
  })

  doc.save("bookings.pdf")

}
</script>

<template>

  <div class="bookings-page">

    <h1>All Bookings</h1>

      <button class="download-btn" @click="downloadPDF">
        Download Bookings PDF
      </button>

    <table class="bookings-table">

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

.bookings-page{
  padding:40px;
}

.bookings-table{
  width:100%;
  border-collapse:collapse;
  background:white;
  box-shadow:0 4px 10px rgba(0,0,0,0.1);
}

.bookings-table th{
  background:#2c3e50;
  color:white;
  padding:12px;
}

.bookings-table td{
  padding:12px;
  border-bottom:1px solid #eee;
}

.bookings-table tr:hover{
  background:#f4f7fb;
}

.download-btn{
  background:#e67e22;
  color:white;
  border:none;
  padding:10px 20px;
  margin-bottom:20px;
  border-radius:5px;
  cursor:pointer;
  font-weight:bold;
}

.download-btn:hover{
  background:#ca6f1e;
}

.footer{
  text-align:center;
  margin-top:300px;
  padding:20px;
  background: #292930;
  color: #fbfff9;
}

</style>