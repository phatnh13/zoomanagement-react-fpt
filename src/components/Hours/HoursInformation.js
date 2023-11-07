import React from "react";
import { CardImg, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Zwergotter from "../../assets/Zwergotter.jpg"
import Panda from "../../assets/Panda.png"
import ThreeTigers from "../../assets/3Tigers.jpg"
import OnlineTicket from "../../assets/Online_Tickets_Zoo.png"
import LotsToExperience from "../../assets/Lots_to_experience.png"
import LotsGoingOn from "../../assets/Lots_going_on.png"
import "./Hours.css"

const HoursInformation = () => {
    return (
        <section className="panel panel__ctas">
            <div className="wrapper">
                <Card style={{ width: '100%' }} >
                    <CardImg src={Zwergotter} alt="Zwergotter" />
                    <Card.ImgOverlay >
                        <CardImg src={LotsToExperience} />
                        <Card.Text>
                            <Link to="/map" style={{ color: "white", fontWeight: 'bold' , position: "absolute", bottom: 5, left: '40%', textDecoration: 'none' }} >Zoo map &#62;</Link>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card style={{ width: '100%' }}>
                    <CardImg src={Panda} style={{ height: '100%' }} />
                    <Card.ImgOverlay >
                        <CardImg style={{ width: '80%' }} src={OnlineTicket} />
                        <Card.Text>
                            <Link to="/buyingticket" style={{ color: "white", fontWeight: 'bold', position: "absolute", bottom: 5, left: '30%', textDecoration: 'none' }}> Save your time! &#62;</Link>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card style={{ width: '100%' }}>
                    <CardImg src={ThreeTigers} style={{ height: '100%' }} />
                    <Card.ImgOverlay >
                        <Card.Img style={{ width: '70%' }} src={LotsGoingOn} />
                        <Card.Text>
                            <Link to="/zoo-news" className="mx-auto" style={{ color: "white",fontWeight: 'bold', position: "absolute", bottom: 5, left: '25%', textDecoration: 'none' }}> News from the zoo &#62;</Link>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </section>
    );
};

export default HoursInformation;