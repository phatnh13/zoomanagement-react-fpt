import React, { useContext, useReducer, useMemo } from "react";
import { Button, FormLabel, Table, Alert, Container } from "react-bootstrap";
import { FaCalendarDay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./BuyingTicket.css"
import { TicketContext } from "./TicketContext/TicketContext";

// intial state
const initialState = {
    orders: []
}

// acction
const ADD_TICKET = 'ADD_TICKET'
const REMOVE_TICKET = 'REMOVE_TICKET'

const addTicket = payload => {
    return {
        type: ADD_TICKET,
        payload
    }
}

const removeTicket = payload => {
    return {
        type: REMOVE_TICKET,
        payload
    }
}

// reducer
const ticketReducer = (state, action) => {
    // The ticket being added or removed
    const ticket = action.payload
    // Find the index of the existing order that matches the ticket being added, if any
    const existingTicketIndex = state.orders.findIndex(order => order.ticket.ticketId === ticket.ticketId)

    switch (action.type) {
        case ADD_TICKET:
            if (existingTicketIndex !== -1) {
                // If the ticket being added already exists in the orders array, update the quantity of the existing order
                const existingOrder = state.orders[existingTicketIndex]
                var updatedOrder = {
                    ...existingOrder,
                    quantity: existingOrder.quantity + 1
                }

                // Create a new orders array with the updated order object
                var updateOrders = [...state.orders]
                updateOrders[existingTicketIndex] = updatedOrder

                // Return a new state object with the updated orders array
                const value = {
                    ...state,
                    orders: updateOrders
                }
                // console.log(value)
                return value;

            } else {
                // If the ticket being added doesn't exist in the orders array, create a new order object and add it to the orders array
                const newOrder = {
                    ticket: ticket,
                    quantity: 1
                }
                // Return a new state object with the new order object added to the orders array
                const value = {
                    ...state,
                    orders: [...state.orders, newOrder]
                }
                // console.log(value)
                return value;
            }
        case REMOVE_TICKET:
            if (existingTicketIndex !== -1) {
                // If the ticket being removed exists in the orders array, update the quantity of the existing order or remove it entirely if the quantity is 1
                const existingOrder = state.orders[existingTicketIndex]
                if (existingOrder.quantity === 1) {

                    // Create a new orders array with the existing order removed
                    var removeOrder = state.orders
                        .filter(order => order.ticket.ticketId !== ticket.ticketId)

                    // Return a new state object with the updated orders array
                    const value = {
                        ...state,
                        orders: removeOrder
                    }
                    // console.log(value)
                    return value;
                } else {
                    // If the quantity of the existing order is greater than 1, update the quantity of the existing order
                    var updateOrder = {
                        ...existingOrder,
                        quantity: existingOrder.quantity - 1
                    }
                    // Create a new orders array with the updated order object
                    var updateOrders = [...state.orders]
                    updateOrders[existingTicketIndex] = updateOrder
                    // Return a new state object with the updated orders array
                    const value = {
                        ...state,
                        orders: updateOrders
                    }
                    // console.log(value)
                    return value;
                }
            }
            return state;
        default:
            throw new Error('Action type is not supported')
    }
}

const BuyingTicket = () => {

    useMemo(() => {
        window.scrollTo({ top: 0 })
    }, [])

    const context = useContext(TicketContext)
    const tickets = context.tickets
    const [state, dispatch] = useReducer(ticketReducer, initialState)
    const { orders } = state
    const NavigationButtons = ({ onAddClick }) => {
        return (
            <div className="button-direct">
                <Button to className="button-right" onClick={onAddClick} disabled={orders.length === 0}>
                    <Link className="link-underline-hover" style={{ color: 'white', textDecoration: 'none' }} to='/viewcart'>Add to cart {' '}</Link>
                </Button>
            </div>
        );
    };
    const handleAddClick = () => {
        // Implement your logic for going next
        context.setDecrease(orders)
        console.log('Add button clicked');
    };
    return (
        <>
            <Container className="min-vh-100">
                {/* <HeaderCart /> */}
                <div className="zoo-information">
                    <h4>Zoo Day Ticket</h4>
                    <Container className="box-alert">
                        <Alert variant="success">
                            <Alert.Heading><h3>TIP-CHEAPEST AND QUICKEST TICKET ONLY ONLINE!</h3></Alert.Heading>
                            <p>Online tickets cheaper than at ticket booths on site</p>
                            <p>Skip the queue with online tickets and go straight to ticket checkers</p>
                            <p>Easy online booking without user account</p>
                        </Alert>
                    </Container>
                    <Container className="ticket-table">

                        <Table className="table" bordered variant="none">
                            <thead>
                                <th className="ticket-table-information" colSpan={4}>PLEASE SELECT YOUR ITEM</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <th style={{ color: '#198754' }} className="text-align fs-5">Please select a day</th>
                                    <th colSpan={2}><FaCalendarDay /></th>
                                    <th>Cost</th>
                                </tr>
                            </tbody>
                            <tbody>
                                {tickets.map((ticket) => {
                                    const order = orders.find((order) => order.ticket.ticketId === ticket.ticketId);
                                    const quantity = order ? order.quantity : 0;

                                    return (
                                        <tr key={ticket.ticketId}>
                                            <th className="text-align">{ticket.ticketName}</th>
                                            <th colSpan={2}>
                                                <Button variant="outline-dark" onClick={() => dispatch(removeTicket(ticket))}>-</Button> {' '}
                                                <FormLabel type='text'>
                                                    {quantity}
                                                </FormLabel>
                                                <Button variant="outline-dark" onClick={() => dispatch(addTicket(ticket))}>+</Button>
                                            </th >
                                            <th>{ticket.price === 0 ? (
                                                <p>Free</p>
                                            ) : (
                                                <p>{ticket.price}$</p>
                                            )}</th>
                                        </tr>
                                    );
                                })}
                            </tbody >

                        </Table >
                        <NavigationButtons onAddClick={handleAddClick} />
                        <div className="fs-5 pb-5">
                            <p style={{ fontFamily: 'Just Another Hand', fontSize: '3rem' }}>Please note!</p>

                            <p>After purchase you will receive your tickets by e-mail (can be presented digitally). The tickets are only valid on the selected date. Booked tickets are excluded from cancellation and/or exchange.</p>

                            <p>Please find further information on the conservation contribution here. The contribution is optional and can be deselected in the cart.</p>

                            <p>Children under 12 years of age and any visitors who lack the necessary maturity or require permanent supervision due to a mental and/or physical condition must be accompanied and supervised on the premises at all times by an adult chaperone</p>

                            <p>* Only valid in combination with a corresponding proof. The proof must be personalized, given a (valid) validity and issued by an official authority/institution (not digital). The proof will be checked at the admission checkers - please have it ready along with a photo ID.</p>
                        </div>
                    </Container >

                </div >
            </Container >
        </>
    );
};

export default BuyingTicket;