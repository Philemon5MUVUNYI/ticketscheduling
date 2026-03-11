import { defineStore } from "pinia"

export const useTicketStore = defineStore("ticket", {

    state: () => ({
        tickets: []
    }),

    actions: {

        bookTicket(ticket){
            this.tickets.push(ticket)
        }

    }

})