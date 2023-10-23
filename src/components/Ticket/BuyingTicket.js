import React, { useContext } from "react";
import { Button, FormLabel, Table, Alert, Container } from "react-bootstrap";
import { FaCalendarDay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./BuyingTicket.css"
import { TicketContext } from "./TicketContext/TicketContext";

// intial state
const initialState = []

// acction
const ADD_TICKET = 'ADD_TICKET'
const REMOVE_TICKET = 'REMOVE_TICKET'

const addTicket = payload => {
    return {
        type: ADD_TICKET,
        payload
    }
}



const BuyingTicket = () => {
    const context = useContext(TicketContext)
    const tickets = context.tickets
    const decrease = context.decrease

    // reducer
    const ticketReducer = (state, action) => {
        switch (action.type) {
            case ADD_TICKET:
                context.setDecrease([...context.decrease, action.payload])
                    // ...state,
                    // decrease: [...state.decrease, action.payload]
                    if (decrease.find(decrease => decrease.ticket.TicketId === action.payload.ticket.TicketId)) {
                    }
                    state.decrease.push(action.payload)
                break;
            case REMOVE_TICKET:
                decrease.forEach((index, value) => {
                    if (decrease[index] === action.payload) {
                        decrease.splice(index, 1)
                    }
                });
                break;
            default:
                throw new Error('Action type is not supported')
        }
        return state;
    }

    const NavigationButtons = ({ onOkClick, onAddClick }) => {
        return (
            <div className="button-direct">
                <Button className="button-left" onClick={onOkClick}>
                    Xac nhan
                </Button>

                <Button to className="button-right" onClick={onAddClick}>
                    <Link className="link-underline-hover" style={{ color: 'white', textDecoration: 'none' }} to='/viewcart'>Add to cart {' '}</Link>
                </Button>
            </div>
        );
    };
    const handleOkClick = () => {
        // Implement your logic for going back
        context.setPrice({ count: context.ticket1.count * 2 + context.ticket2.count * 1.4 })
        context.setAmount({ count: context.ticket1.count + context.ticket2.count + context.ticket3.count })
        console.log(context);
    };

    const handleAddClick = () => {
        // Implement your logic for going next
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
                                    <th className="text-align">Please select a day</th>
                                    <th colSpan={2}><FaCalendarDay /></th>
                                    <th>Cost</th>
                                </tr>
                            </tbody>
                            <tbody>
                                {tickets.map((ticket) => {
                                    return (
                                        <tr key={ticket.ticketId}>
                                            <th className="text-align">{ticket.ticketName}</th>
                                            <th colSpan={2}>

                                                <Button variant="outline-dark" onClick={context1.decrease}>-</Button> {' '}
                                                <FormLabel type='text'>{' '}{context1.ticket.count}{' '}</FormLabel>{' '}

                                                <Button variant="outline-dark" onClick={() => context1.setTicket1({ count: context1.ticket.count + 1 })}>+</Button>

                                            </th>
                                            <th>{ticket.price}$</th>
                                        </tr>
                                    )
                                })}

                                {/* <tr>
                                    <th className="text-align">Day Ticket Zoo - Adult</th>
                                    <th class="align-self-center" colSpan={2}>

                                        <Button variant="outline-dark" onClick={context.decrease1}>-</Button> {' '}
                                        <FormLabel type='text'>{' '}{context.ticket1.count}{' '}</FormLabel>{' '}
                                        <Button variant="outline-dark" onClick={() => context.setTicket1({ count: context.ticket1.count + 1 })}>+</Button>

                                    </th>
                                    <th>2$</th>
                                </tr>
                                <tr>
                                    <th className="text-align">Day Ticket Zoo - Children<p>aged under 18</p></th>
                                    <th colSpan={2}>

                                        <Button variant="outline-dark" onClick={context.decrease2}>-</Button> {' '}
                                        <FormLabel type='text'>{' '}{context.ticket2.count}{' '}</FormLabel>{' '}
                                        <Button variant="outline-dark" onClick={() => context.setTicket2({ count: context.ticket2.count + 1 })}>+</Button>

                                    </th>
                                    <th>1.4$</th>
                                </tr>
                                <tr>
                                    <th className="text-align">Day Ticket Zoo - Children<p>lower than 1m3</p></th>
                                    <th colSpan={2}>

                                        <Button variant="outline-dark" onClick={context.decrease3}>-</Button> {' '}
                                        <FormLabel type='text'>{' '}{context.ticket3.count}{' '}</FormLabel>{' '}
                                        <Button variant="outline-dark" onClick={() => context.setTicket3({ count: context.ticket3.count + 1 })}>+</Button>

                                    </th>
                                    <th>Free</th>
                                </tr> */}
                                <tr>
                                    <th className="text-align">Total</th>
                                    <th colSpan={2}>
                                        <FormLabel type='text'>{context.amount.count}</FormLabel>
                                    </th>
                                    <th>
                                        <FormLabel type='text'>{context.price.count}</FormLabel>
                                    </th>
                                </tr>
                            </tbody>

                        </Table>
                        <NavigationButtons onOkClick={handleOkClick} onAddClick={handleAddClick} />
                        <div className="fs-5">
                            <p style={{ fontFamily: 'Just Another Hand', fontSize: '3rem' }}>Please note!</p>

                            <p>After purchase you will receive your tickets by e-mail (can be presented digitally). The tickets are only valid on the selected date. Booked tickets are excluded from cancellation and/or exchange.</p>

                            <p>Please find further information on the conservation contribution here. The contribution is optional and can be deselected in the cart.</p>

                            <p>Children under 12 years of age and any visitors who lack the necessary maturity or require permanent supervision due to a mental and/or physical condition must be accompanied and supervised on the premises at all times by an adult chaperone</p>

                            <p>* Only valid in combination with a corresponding proof. The proof must be personalized, given a (valid) validity and issued by an official authority/institution (not digital). The proof will be checked at the admission checkers - please have it ready along with a photo ID.</p>
                        </div>
                    </Container>

                </div>
            </Container>
        </>
    );
};

export default BuyingTicket;