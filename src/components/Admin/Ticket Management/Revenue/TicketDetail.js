import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
function TicketDetail({ticket, from, to}) {
    const [revenue, setRevenue] = useState({});
    useEffect(() => {
        console.log(from, "from")
        console.log(to, "to")
        fetch(`https://vietnamzoo.azurewebsites.net/api/order/revenue?from=${from}&to=${to}&ticketId=${ticket.ticketId}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => res.json())
            .then(data => {
                setRevenue(data);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, [ticket.ticketId, from, to]);
    return ( 
        <Card className="mb-2">
            <Card.Body>
                <Card.Text>
                    {ticket.ticketName}: <span className="text-primary mx-5">{revenue.totalQuantity} solds</span> <span className="text-success mx-5">{revenue.totalRevenue}$</span>
                </Card.Text>
            </Card.Body>
        </Card>
     )
}

export default TicketDetail;