import React from "react";
import TigerImg from "../assets/Tigerbackground.png";
import WebLogo from "../assets/WebLogo.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>

            <div className="header-img">
                <div className="logo-box">
                    <div className="logo">
                        <div className="text-logo-top">VietNam Zoo</div>
                        <div className="text-logo-down">Since 1864</div>
                        <img className="web-logo" alt="WebLogo" src={WebLogo} />
                    </div>
                </div>
                <img className="tiger-backgroud" alt="Tiger" src={TigerImg} />
                <Container className="zoo-event-container">
                    <div className="zoo-event">
                        <Row>
                            <Col className="zoo-event-area">
                                <p>OPENING HOURS</p>
                                <p>Monday-Saturday</p>
                                <p>8h30 - 18h30</p>
                            </Col>
                            <Col className="zoo-event-area">MAP</Col>
                            <Col className="zoo-event-area">
                                <p>NEXT FEEDING</p>
                                <p>Panda Talk</p>
                                <p>11:00</p>
                                <div className="event-link-box">
                                    <Link className="event-link" to="/feedings">All Feedings</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Home;