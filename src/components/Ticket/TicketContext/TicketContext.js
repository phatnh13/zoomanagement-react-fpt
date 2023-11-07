import { createContext, useEffect, useState } from "react";
import React from "react";

export const TicketContext = createContext();

export function TicketProvider({ children }) {

    const [tickets, setTickets] = useState([])
    const [decrease, setDecrease] = useState([])
    const [submitted, setSubmitted] = useState(false);
    const [orderId, setOrderId] = useState('')
    // decrease.map(() => {
    //     if (decrease.)
    // })

    useEffect(() => {
        fetch('https://vietnamzoo.azurewebsites.net/api/ticket', {
            method: "GET",
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        })
            .then(data => data.json())
            .then(data => {
                setTickets(data)
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
        submitted, setSubmitted,
        tickets, setTickets,
        decrease, setDecrease,
        price, setPrice,
        lastName, setLastName,
        firstName, setFirstName,
        email, setEmail,
        phoneNumber, setPhoneNumber,
        orderId, setOrderId
    }
    return (
        <TicketContext.Provider value={value}>
            {children}
        </TicketContext.Provider>
    )
}
