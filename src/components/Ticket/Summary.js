
import React, { useContext, useState } from "react";
import { Row, Table, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TicketContext } from "./TicketContext/TicketContext";
import TicketItemsTable from "./TicketItemsTable";
import 'react-toastify/dist/ReactToastify.css';
import ShowOrderModal from "./ShowOrderModal";

const Summary = () => {

    const context = useContext(TicketContext);
    const decrease = context.decrease;
    const name = context.firstName + context.lastName;
    const email = context.email;
    const phoneNumber = context.phoneNumber;
    const orderId = context.orderId
    const orders = decrease.map(decrease => ({
        ...decrease.ticket.ticketId.toString(),
        quantity: decrease.quantity
    }));
    // Initialize an empty object
    const resultObject = {};

    // Loop through the dataArray and populate the resultObject
    orders.forEach(item => {
        const key = item['0'].toString(); // Get the key from the '0' property
        const value = item.quantity; // Get the value from the 'quantity' property
        resultObject[key] = value; // Assign the value to the key in the result object
    });
    console.log(resultObject)
    console.log(orderId, "orderId")
    let handleAddOrder = async () => {
        console.log("Add order");
        console.log("Customer name: " + name);
        console.log("Email: " + email);
        console.log("Phone Number: " + phoneNumber);
        console.log("Tickets: " + resultObject);

        await fetch("https://vietnamzoo.azurewebsites.net/api/Order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                tickets: resultObject
            }),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Failed to place the order");
                }
            })
            .then((data) => {
                // Use 'data' for further processing
                context.setOrderId(data);
                context.setSubmitted(true);
            })
            .catch((error) => {
                console.log(error);
                context.setSubmitted(false);
            });

        // Update state and show modal
        setShowModal(true);
    };
    const NavigationButtons = () => {
        return (
            <div className="navigation-buttons button-direct pb-5">
                <Link to='/billingaddress'>
                    <Button className="back-button" style={{ backgroundColor: '#F07300', fontSize: '30px', marginRight: '80px' }}>
                        <svg
                            width="40"
                            height="40"
                            fill="currentColor"
                            class="bi bi-arrow-left-circle"
                            viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                        </svg>
                        {' '}BACK
                    </Button>
                </Link>
                <Button
                    className="next-button"
                    style={{ backgroundColor: "green", fontSize: "30px" }}
                    onClick={handleAddOrder}>
                    BUY
                    <svg
                        width="40"
                        height="40"
                        fill="currentColor"
                        class="bi bi-arrow-right-circle"
                        viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                </Button>

            </div>
        );
    };
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
        setShowModal(false);

    };
    return (
        <>
            <Container className="zoo-information">
                <h4>SUMMARY</h4>
                <div className="ticket-table mx-auto">
                    <Row>
                        <Col>
                            <div className="ticket-table-information">Billing Address</div>
                            <Table striped bordered hover size="sm">
                                <tbody style={{ textAlign: 'left' }}>

                                    <tr style={{ border: 'none', fontWeight: 'bold' }}>Name: {context.firstName}{' '}{context.lastName}</tr>
                                    <tr style={{ fontWeight: 'bold' }}>Phone Number: {context.phoneNumber}</tr>

                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <div className="ticket-table-information">Email</div>
                            <Table striped bordered hover size="sm">
                                <tbody style={{ textAlign: 'left' }}>
                                    <tr style={{ fontWeight: 'bold' }}>
                                        Email: {context.email}
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <div className="ticket-table-information">ITEMS</div>
                    <TicketItemsTable />
                    <NavigationButtons />
                    <ShowOrderModal
                        show={showModal}
                        handleClose={closeModal}
                        orderId={context.orderId.orderId}
                        success={context.submitted}
                    />
                </div>

            </Container>
        </>
    )
}
export default Summary
