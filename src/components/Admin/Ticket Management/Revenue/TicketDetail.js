import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
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
                    <Row>
                        <Col lg={8} md={8} sm={8}>{ticket.ticketName}:</Col>
                        <Col lg={2} md={2} sm={2}><span className="text-primary">{revenue.totalQuantity} solds</span></Col>
                        <Col lg={2} md={2} sm={2}><span className="text-success">{revenue.totalRevenue}$</span></Col>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>
     )
}

export default TicketDetail;