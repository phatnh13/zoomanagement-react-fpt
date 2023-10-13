import React, { useContext } from "react";
import "./BuyingTicket.css"
import { Table } from "react-bootstrap";
import { TicketContext } from "./TicketContext/TicketContext";
import moment from "moment/moment";

const TicketItemsTable = () => {
    const context = useContext(TicketContext)
    const ticket1Info = {
        image: '',
        name: 'Day Ticket Zoo - Adult',
        price: 2
    }
    const ticket2Info = {
        image: '',
        name: 'Day Ticket Zoo - Children (under 16)',
        price: 1.4
    }
    const ticket3Info = {
        image: '',
        name: 'Day Ticket Zoo - Children(Lower than 1m3)',
        price: 0
    }
    
    const date = moment().format("MMMM/DD/YYYY")
    return (
        <Table className="cart-table" bordered variant="none">
            <tbody>
                <tr>
                    <th></th>
                    <th>Item information</th>
                    <th>Item price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </tbody>

            <tbody>
                {context.ticket1.count!==0 ? (
                <tr>
                    <th className="text-align">Lấy img ra</th>
                    <th className="text-align">
                        <p style={{ color: '#3C5724' }}>{ticket1Info.name} </p>
                        <p>Valid from: {date} </p>
                        <p>Valid to:</p>
                        <p>Item reserved for you until:</p>
                    </th>
                    <th>{ticket1Info.price}</th>
                    <th>{context.ticket1.count}</th>
                    <th>{ticket1Info.price * context.ticket1.count}</th>
                </tr>
                ) : ("")}  
                {context.ticket2.count!==0 ? (
                <tr>
                    <th className="text-align">Lấy img ra</th>
                    <th className="text-align">
                        <p style={{ color: '#3C5724' }}>{ticket2Info.name} </p>
                        <p>Valid from: {date} </p>
                        <p>Valid to:</p>
                        <p>Item reserved for you until:</p>
                    </th>
                    <th>{ticket2Info.price}</th>
                    <th>{context.ticket2.count}</th>
                    <th>{ticket2Info.price * context.ticket2.count}</th>
                </tr>
                ) : ("")}  
                {context.ticket3.count!==0 ? (
                <tr>
                    <th className="text-align">Lấy img ra</th>
                    <th className="text-align">
                        <p style={{ color: '#3C5724' }}>{ticket3Info.name} </p>
                        <p>Valid from: {date} </p>
                        <p>Valid to:</p>
                        <p>Item reserved for you until:</p>
                    </th>
                    <th>Free</th>
                    <th>{context.ticket3.count}</th>
                    <th>{ticket3Info.price * context.ticket3.count}</th>
                </tr>
                ) : ("")}    
                
            </tbody>
        </Table>
    )

}

export default TicketItemsTable
