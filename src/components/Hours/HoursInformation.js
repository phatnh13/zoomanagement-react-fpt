import React from "react";
import { CardFooter,  CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Iguana from "../../assets/Iguana.png"
import Hippo from "../../assets/Hippo.png"
import Panda from "../../assets/Panda.png"
import "./Hours.css"

const HoursInformation = () => {
    return (
        <section className="bg-white panel panel__ctas">
            <div className="wrapper">
                <Card style={{ width: '18rem' }}>
                    <CardImg src={Iguana} alt="Iguanas" />
                    <Card.ImgOverlay style={{ color: "white" }}>
                        <Card.Title>Lots to </Card.Title>
                        <Card.Title >experience</Card.Title>
                        <CardFooter>
                            <Link to="/map" style={{color: "white", position: "absolute", bottom: 5}} >An overview of the inhabitant {'>'}</Link>
                        </CardFooter>
                    </Card.ImgOverlay>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <CardImg src={Hippo} alt="Hippo" />
                    <Card.ImgOverlay style={{ color: "black" }}>
                        <Card.Title>Online </Card.Title>
                        <Card.Title >tickets</Card.Title>
                        <CardFooter>
                            <Link to="/ByingTickets" style={{color: "white", position: "absolute", bottom: 5}}> Save your time! {'>'}</Link>
                        </CardFooter>
                    </Card.ImgOverlay>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <CardImg src={Panda} alt="Panda" />
                    <Card.ImgOverlay style={{ color: "white" }}>
                        <Card.Title>Be a </Card.Title>
                        <Card.Title >supporter</Card.Title>
                        <CardFooter>
                            <Link to="/donate" className="mx-auto" style={{color: "white", position: "absolute", bottom: 5}}> Become an animal sponsor {'>'}</Link>
                        </CardFooter>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </section>
    );
};

export default HoursInformation;