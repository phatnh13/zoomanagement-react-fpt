import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import "./Hours.css"
import WebLogo from "../../assets/WebLogo.png";
import Gate from "../../assets/gate.JPG"
import HoursInformation from "./HoursInformation";
import { Link } from "react-router-dom";

const Hours = () => {
    return (
        <>

            <Card className="bg-dark text-black">
                <Card.Img src={Gate} alt="gate-background" height={500} />
                <Card.ImgOverlay>
                <Link to='/'>
                    <div className="header-img">
                        <div className="logo-box">
                            <div className="logo">
                                <div className="text-logo-top">VietNam Zoo</div>
                                <div className="text-logo-down">Since 1864</div>
                                <img className="web-logo" alt="WebLogo" src={WebLogo} />
                            </div>
                        </div>
                    </div>
                    </Link>
                </Card.ImgOverlay>
            </Card>
            <Card className="mx-auto text-center" style={{ width: '100%' }}>
                <Card.Body className="list-title">
                    <Card.Title>OPENING HOURS</Card.Title>
                    <Card.Text>
                        Saigon Zoo will be opening from Monday to Sunday, including holidays with two main time slots
                    </Card.Text>
                </Card.Body>
                <ListGroup >
                    <ListGroup.Item className="list-group-flush">4:30 - 7:00 :  for individuals participating in nutrition and exercise.</ListGroup.Item>
                    <ListGroup.Item className="list-group-flush">9:00 -18:30 : Open for visitors</ListGroup.Item>
                    <ListGroup.Item className="list-note">
                        Important notes!
                        All animals cages and restaurants will be close 30 minutes before the Zoo itself.
                    </ListGroup.Item>
                </ListGroup>
            </Card>

            <HoursInformation />
        </>
    );
};

export default Hours;