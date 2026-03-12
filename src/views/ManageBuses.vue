<script setup>

import { ref } from "vue"
import { useBusStore } from "../stores/busStore"

const busStore = useBusStore()

const name = ref("")
const from = ref("")
const to = ref("")
const price = ref("")

function addBus(){

  busStore.addBus({
    name:name.value,
    from:from.value,
    to:to.value,
    price:price.value
  })

  name.value=""
  from.value=""
  to.value=""
  price.value=""

}

const editIndex = ref(null)

function editBus(index){

  const bus = busStore.buses[index]

  name.value = bus.name
  from.value = bus.from
  to.value = bus.to
  price.value = bus.price

  editIndex.value = index
}

</script>

<template>

  <div class="container">

    <h1>Manage Buses</h1>

    <h3>Add Bus</h3>

    <form @submit.prevent="addBus">

      <input v-model="name" placeholder="Bus Name" required>

      <input v-model="from" placeholder="From City" required>

      <input v-model="to" placeholder="To City" required>

      <input v-model="price" placeholder="Price" required>

      <button>
        {{ editIndex !== null ? "Update Bus" : "Add Bus" }}
      </button>

    </form>

    <h3>Bus List</h3>

    <table>

      <tr>
        <th>Name</th>
        <th>From</th>
        <th>To</th>
        <th>Price</th>
        <th>Action</th>
      </tr>

      <!--Duplication of delete-->
      <!--<tr v-for="(bus,index) in busStore.buses" :key="index">

        <td>{{ bus.name }}</td>
        <td>{{ bus.from }}</td>
        <td>{{ bus.to }}</td>
        <td>{{ bus.price }}</td>

        <td>
          <button @click="busStore.deleteBus(index)">Delete</button>
        </td>

      </tr>-->

      <tr v-for="(bus,index) in busStore.buses" :key="index">

        <td>{{ bus.name }}</td>
        <td>{{ bus.from }}</td>
        <td>{{ bus.to }}</td>
        <td>{{ bus.price }}</td>

        <td>

          <button @click="editBus(index)">Edit</button>

          <button @click="busStore.deleteBus(index)">
            Delete
          </button>

        </td>

      </tr>

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

input{
  display:block;
  margin:10px 0;
  padding:8px;
  width:250px;
}

button{
  padding:8px 12px;
  background:#42b883;
  border:none;
  color:white;
  cursor:pointer;
}

table{
  margin-top:20px;
  border-collapse:collapse;
  width:500px;
}

th,td{
  border:1px solid #ddd;
  padding:8px;
  text-align:center;
}

.footer{
  text-align:center;
  margin-top:80px;
  padding:20px;
  background: #292930;
  color: #fbfff9;
}

</style>