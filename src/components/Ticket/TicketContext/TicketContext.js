import { createContext, useEffect, useState } from "react";
import React from "react";

export const TicketContext = createContext();

export function TicketProvider({ children }) {

    const [tickets, setTickets] = useState([])
    const [decrease, setDecrease] = useState([])
    const [orders, setOrders] = useState([])


    // decrease.map(() => {
    //     if (decrease.)
    // })

    useEffect(() => {
        fetch('https://localhost:7193/api/Ticket', {
            method: "GET",
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        })
            .then(data => data.json())
            .then(data => {
                setTickets(data)
                console.log(data)
            })
            .catch(error => {
                console.error(error);
            })

    }, [])
    const [price, setPrice] = useState({ count: 0 })
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const value = {
        orders, setOrders,
        tickets, setTickets,
        decrease, setDecrease,
        price, setPrice,
        lastName, setLastName,
        firstName, setFirstName,
        email, setEmail,
        phoneNumber, setPhoneNumber,
    }
    return (
        <TicketContext.Provider value={value}>
            {children}
        </TicketContext.Provider>
    )
}
