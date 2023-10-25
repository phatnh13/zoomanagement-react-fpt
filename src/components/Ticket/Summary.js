
import React, { useContext } from "react";
import { Row, Table, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TicketContext } from "./TicketContext/TicketContext";
import TicketItemsTable from "./TicketItemsTable";


const Summary = () => {

    const context = useContext(TicketContext);
    const tickets = context.tickets
    const decrease = context.decrease;
    const name = context.firstName;
    const email = context.email;
    const phoneNumber = context.phoneNumber
    
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
    let handleAddOrder = async () => {
        console.log("Add order");
        console.log("Customer name: " + name);
        console.log("Email: " + email);
        console.log("Phone Number: " + phoneNumber);
        console.log("Tickets: " + resultObject);
        await fetch("https://localhost:7193/api/Order",
            {
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
                    alert("Add order successfully");
                } else {
                    alert("Add order failed");
                    window.location.reload(false);
                }
            })
            .catch(rejected => {
                console.log(rejected);
            });
    }

    const NavigationButtons = () => {
        return (
            <div className="navigation-buttons button-direct">
                <Link to='/viewcart'>
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
                <Link to='/'>
                    <Button className="next-button" onClick={handleAddOrder} style={{ backgroundColor: 'green', fontSize: '30px' }}>
                        BUY {' '}
                        <svg
                            width="40"
                            height="40"
                            fill="currentColor"
                            class="bi bi-arrow-right-circle"
                            viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                    </Button>
                </Link>
            </div>
        );
    };
    return (
        <>

            <div className="vh-100">
                <Container className="zoo-information">
                    <h4>SUMMARY</h4>
                    <div className="ticket-table mx-auto">
                        <Row>
                            <Col>
                                <div className="ticket-table-information">Billing Address</div>
                                <Table striped bordered hover size="sm">
                                    <tbody style={{ textAlign: 'left' }}>
                                        <p>Name: {context.firstName}{' '}{context.lastName}</p>
                                        <p>Phone Number: {context.phoneNumber}</p>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col>
                                <div className="ticket-table-information">Email</div>
                                <Table striped bordered hover size="sm">
                                    <tbody style={{ textAlign: 'left' }}>
                                        <p>Email: {context.email}</p>
                                        <p></p>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col>
                                <div className="ticket-table-information">Payment Method</div>
                                <Table striped bordered hover size="sm">
                                    <tbody style={{ textAlign: 'left' }}>
                                        <p>Payment Method:</p>
                                        <p></p>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <div className="ticket-table-information">ITEMS</div>
                        <TicketItemsTable />
                        <NavigationButtons onNextClick={handleAddOrder} />
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Summary
