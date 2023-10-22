import { createContext, useEffect, useState } from "react";
import React from "react";

export const TicketContext = createContext();

export function TicketProvider({ children }) {
    //Ticket1

    const [tickets, setTickets] = useState([])
    const [decrease, setDecrease] = useState([])

    const [ticket1, setTicket1] = useState({
        count: 0,
    })

    // decrease.map(() => {
    //     if (decrease.)
    // })

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

    const [amount, setAmount] = useState({ count: 0 })
    const [price, setPrice] = useState({ count: 0 })
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    })

    const value = {
        ticket1, setTicket1,
        ticket2, setTicket2,
        ticket3, setTicket3,
        tickets, setTickets,
        decrease, setDecrease,
        amount, setAmount,
        price, setPrice,
        lastName, setLastName,
        firstName, setFirstName,
        email, setEmail,
        phoneNumber, setPhoneNumber,
        user, setUser
    }
    return (
        <TicketContext.Provider value={value}>
            {children}
        </TicketContext.Provider>
    )
}
