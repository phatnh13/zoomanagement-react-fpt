import React from "react";
import TigerImg from "../../assets/Tigerbackground.png";
import WebLogo from "../../assets/WebLogo.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

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
            <div className="zoo-information">
                <h4>Welcome to  Saigon Zoo</h4>
                <p>Saigon Zoo is one of the buildings with the oldest history in Ho Chi Minh. Saigon Zoo is currently home to</p>
                <p>590 animals of 125 species, 1,800 plants of 260 species; 23 species of domestic orchids; 33 species of cacti, 34 species of ornamental plants, green grass, etc.</p>
            </div>
        </>
    );
};

export default Home;