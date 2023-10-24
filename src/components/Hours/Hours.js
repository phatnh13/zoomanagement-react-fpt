import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import "./Hours.css"
import Gate from "../../assets/gate.JPG"
import HoursInformation from "./HoursInformation";

const Hours = () => {
    return (
        <>

            <Card className="bg-dark text-black">
                <Card.Img src={Gate} alt="gate-background" height={500} />
            </Card>
            <div className="text-center" style={{marginTop: '2rem'}}>
                <h1 className="center page-intro__headline page-intro__headline--center" >OPENING HOURS</h1>
                <p style={{ marginTop: '17px', fontSize: '1rem', textAlign: "center", marginLeft:'15rem', marginRight:'15rem' }}>Saigon Zoo is open 365 days a year!</p>
            </div>
            <Card className="mx-auto text-center" style={{ width: '30rem', marginBottom: '10rem' }} >
                <ListGroup >
                    <ListGroup.Item className="list-group-flush">4:30 - 7:00 :  for individuals participating in nutrition and exercise.</ListGroup.Item>
                    <ListGroup.Item className="list-group-flush">9:00 -18:30 : Open for visitors</ListGroup.Item>
                    <ListGroup.Item className="list-note">
                        Important notes!
                        All animals cages and restaurants will be close 30 minutes before the Zoo itself.
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            <hr></hr>
            <HoursInformation />
        </>
    );
};

export default Hours;