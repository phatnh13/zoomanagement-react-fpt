import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import TigerImg from "../../assets/Tigerbackground.png";
import WebLogo from "../../assets/WebLogo.png";
import MapLoge from "../../assets/MapLogo.png";
import HomeTicKet from "./HomeTicKet";

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
                                <p>Monday - Sunday</p>
                                <p>8h30 - 18h30</p>
                            </Col>
                            <Col className="zoo-event-area">
                                <p>MAP</p>
                                <img className="map-img" alt="Map" src={MapLoge} />
                                <div className="event-link-box">
                                    <Link className="event-link" to="/view-map">View Map</Link>
                                </div>
                            </Col>
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
            <HomeTicKet />
        </>
    );
};

export default Home;