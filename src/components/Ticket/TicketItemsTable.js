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
    const date = moment().format("MMMM/DD/YYYY")
    return (
        <Table className="table" bordered variant="none">
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
            </tbody>
        </Table>
    )

}

export default TicketItemsTable
