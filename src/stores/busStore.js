import { defineStore } from "pinia"

export const useBusStore = defineStore("bus", {

    state: () => ({
        buses: []
    }),

    actions: {

        addBus(bus){
            this.buses.push(bus)
        },

        deleteBus(index){
            this.buses.splice(index,1)
        },
        updateBus(index, updatedBus){
            this.buses[index] = updatedBus
        }

    }

})