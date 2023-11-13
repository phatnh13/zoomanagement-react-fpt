import React from "react";
import TicketHome1 from "../../../assets/ticketHome1.jpg";
import TicketHome2 from "../../../assets/ticketHome2.png";
import { Row, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Welcome.css"

const Welcome = () => {
    return (
        <>
            <div className="welcome-text__top">
                <div style={{ backgroundColor: '#8b9472' }}>
                    <div className="d-flex justify-content-end">
                        <Button className="btn-view-all-price mt-3 me-5 mb-3 btn btn-success"><Link className="link-underline-opacity-0 link-underline link-light" to="/viewticket">View all price</Link></Button>
                    </div>
                    <Row className="view-price__welcome mt-1 pb-1">
                        <Card xs={6} sm={6} md={6} lg={6} className="view-price__card mx-5">
                            <Card.Img className="image-price" src={TicketHome1} />
                            <Card.Body>
                                <Card.Title className="view-price__txt-ticket mx-5">Day Ticket</Card.Title>
                                <Card.Title className="d-flex justify-content-center pt-1">
                                    <Button className="view-price__btn-direct-ticket btn btn-warning"><Link className="link-underline-opacity-0 link-underline link-light" to="/buyingticket">Book Now</Link></Button>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <Card xs={6} sm={6} md={6} lg={6} className="view-price__card mx-5">
                            <Card.Img className="image-price" src={TicketHome2} />
                            <Card.Body>
                                <Card.Title className="view-price__txt-ticket mx-5">Annual Passes</Card.Title>
                                <Card.Title className="d-flex justify-content-center pt-1">
                                    <Button className="view-price__btn-direct-ticket btn btn-warning"><Link className="link-underline-opacity-0 link-underline link-light" to="/buyingticket">Purchase</Link></Button>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Welcome;