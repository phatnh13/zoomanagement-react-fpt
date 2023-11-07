import React, { useEffect } from "react";
import { Card, ListGroup, Col } from "react-bootstrap";
import "./Hours.css"
import Gate from "../../assets/gate.JPG"
import HoursInformation from "./HoursInformation";

const Hours = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div style={{ backgroundColor: '#F7F1DB' }}>
                <Card.Img src={Gate} alt="gate-background" style={{ height: '40rem' }} />
                <div className="text-center" style={{ marginTop: '2rem' }}>
                    <h1 className="page-headline" >OPENING HOURS</h1>
                    <p style={{ fontSize: '1.375rem', lineHeightt: '1.75rem' }}>Saigon Zoo is open 365 days a year!</p>
                </div>
                <Col className=" mx-auto " style={{ width: '30%', marginBottom: '5rem' }} >
                    <ListGroup variant="flush" >
                        <ListGroup.Item className="list-group-flush">4:30 - 7:00 : for individuals participating in nutrition and exercise.</ListGroup.Item>
                        <ListGroup.Item className="list-group-flush">9:00 - 18:30 : Open for visitors</ListGroup.Item>
                        <ListGroup.Item className="list-note">
                            <p className="small">
                                <strong>Important notes!</strong>
                            </p>
                            <p className="small">All animals cages and restaurants will be close 30 minutes before the Zoo itself.</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <center><hr style={{ width: '70%' }}></hr></center>
                <HoursInformation />
            </div>
        </>
    );
};

export default Hours;