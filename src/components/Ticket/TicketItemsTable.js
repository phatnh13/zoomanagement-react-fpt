import React, { useContext } from "react";
import "./BuyingTicket.css"
import { Table, FormLabel, Image } from "react-bootstrap";
import { TicketContext } from "./TicketContext/TicketContext";
import moment from "moment/moment";

const TicketItemsTable = () => {

    const context = useContext(TicketContext)

    const decrease = context.decrease

    const date = moment().format("MMMM/DD/YYYY")

    // Initialize the total price to 0
    let totalPrice = 0;

    // Iterate through the table and accumulate the total price
    for (const ticket of decrease) {
        totalPrice += ticket.quantity * ticket.ticket.price;
    }

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
                {decrease.map((data) => {
                    return (
                        <tr key={data.ticket.ticketId} data={data}>
                            <th className="image-align__th">
                                <div>
                                    <Image className="image-table-cart img-fluid" src={data.ticket.image}></Image>
                                </div>
                            </th>
                            <th className="text-align">
                                <p style={{ color: '#3C5724' }}>{data.ticket.ticketName} </p>
                                <p>Valid from: {date} </p>
                                <p>Valid to:</p>
                                <p>Item reserved for you until:</p>
                            </th>
                            <th><div className="">{data.ticket.price}</div></th>
                            <th>{data.quantity}
                            </th>
                            <th>{data.ticket.price * data.quantity}</th>
                        </tr>

                    )
                }
                )}
                <tr>
                    <th colSpan={4}>
                    </th>
                    <th>
                        <FormLabel type='text'>{totalPrice}</FormLabel>
                    </th>
                </tr>
            </tbody>
        </Table>
    )

}

export default TicketItemsTable
