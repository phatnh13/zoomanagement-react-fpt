import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import TicketDetail from "./TicketDetail";
import { DateHelper } from "../../../DateHelper";
function RevenueTable({ ticketsList }) {
    const [fromTime, setFromTime] = useState(DateHelper.getToday());
    const [toTime, setToTime] = useState(DateHelper.getToday());
    const [revenue, setRevenue] = useState({});
    useEffect(() => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/order/revenue?from=${fromTime}&to=${toTime}&ticketId=-1`, {
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
    }, [fromTime, toTime]);
    return (
        <Card className="mt-1">
            <Card.Body>
                <Row className="mb-2">
                    <Col>
                        <strong>From</strong>
                        <Form.Control type="date"
                            value={fromTime}
                            onChange={(e) => setFromTime(e.target.value)} />
                    </Col>
                    <Col>
                        <strong>To</strong>
                        <Form.Control type="date"
                            value={toTime}
                            onChange={(e) => setToTime(e.target.value)} />
                    </Col>
                </Row>
                {ticketsList.map((ticket, index) => {
                    return (
                        <TicketDetail key={index}
                            ticket={ticket}
                            from={DateHelper.formatDateForQuery(fromTime)}
                            to={DateHelper.formatDateForQuery(toTime)} />
                    )
                })}
                <Card className="mb-2">
                    <Card.Body>
                        <Card.Text>
                        <Row>
                        <Col lg={8} md={8} sm={8}>Total:</Col>
                        <Col lg={2} md={2} sm={2}><span className="text-primary">{revenue.totalQuantity} solds</span></Col>
                        <Col lg={2} md={2} sm={2}><span className="text-success">{revenue.totalRevenue}$</span></Col>
                    </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>
    )
}

export default RevenueTable;