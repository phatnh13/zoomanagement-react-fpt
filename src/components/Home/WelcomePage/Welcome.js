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
                <div className="welcome-text__information">Welcome to Saigon Zoo</div>
                <div className="about-zoo__information">Saigon Zoo is one of the buildings with the oldest history in Ho Chi Minh. Saigon Zoo is currently home to 590 animals of 125 species, 1,800 plants of 260 species; 23 species of domestic orchids; 33 species of cacti, 34 species of ornamental plants, green grass, etc.</div>
                <div className='mb-5' style={{ backgroundColor: '#8b9472' }}>
                    <div className="d-flex justify-content-end">
                        <Button className="btn-view-all-price mt-3 me-5 btn btn-success"><Link className="link-underline-opacity-0 link-underline link-light" to="/buyingticket">View all price</Link></Button>
                    </div>
                    <Row className="view-price__welcome mt-2">
                        <Card className="view-price__card mx-5">
                            <Card.Img className="image-price" src={TicketHome1} />
                            <Card.Body>
                                <Card.Title className="view-price__txt-ticket mx-5">Day Ticket</Card.Title>
                                <Card.Title className="d-flex justify-content-center">
                                    <Button className="view-price__btn-direct-ticket btn btn-warning">Book Now</Button>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="view-price__card mx-5">
                            <Card.Img className="image-price" src={TicketHome2} />
                            <Card.Body>
                                <Card.Title className="view-price__txt-ticket mx-5">Annual Passes</Card.Title>
                                <Card.Title className="d-flex justify-content-center">
                                    <Button className="view-price__btn-direct-ticket btn btn-warning">Purchase</Button>
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