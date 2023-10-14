import { createContext, useState } from "react";
import React from "react";

export const TicketContext = createContext();

export function TicketProvider({ children }){
    //Ticket1
    const [ticket1, setTicket1] = useState({
        count: 0,
    })
    const decrease1 = (e) => {
        if (ticket1.count <= 0) {
            return
        }
        setTicket1({ count: ticket1.count - 1 })
    }
    //Ticket2
    const [ticket2, setTicket2] = useState({
        count: 0,
    })
    const decrease2 = (e) => {
        if (ticket2.count <= 0) {
            return
        }
        setTicket2({ count: ticket2.count - 1 })
    }
    //Ticket3
    const [ticket3, setTicket3] = useState({
        count: 0,
    })
    const decrease3 = (e) => {
        if (ticket3.count <= 0) {
            return
        }
        setTicket3({ count: ticket3.count - 1 })
    }
    const [amount, setAmount] = React.useState({ count: 0 })
    const [price, setPrice] = React.useState({ count: 0 })
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const value = {
        ticket1, setTicket1, decrease1,
        ticket2, setTicket2, decrease2,
        ticket3, setTicket3, decrease3,
        amount, setAmount,
        price, setPrice,
        lastName, setLastName,
        firstName, setFirstName,
        email, setEmail,
        phoneNumber, setPhoneNumber
    }
    return (
        <TicketContext.Provider value={value}>
            {children}
        </TicketContext.Provider>
    )
}
