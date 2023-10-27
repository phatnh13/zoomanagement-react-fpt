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
                <Card  >
                    <CardImg src={Iguana} alt="Iguanas" />
                    <Card.ImgOverlay style={{ color: "white" }}>
                        <Card.Title>A good </Card.Title>
                        <Card.Title >overview</Card.Title>
                        <CardFooter>
                            <Link to="/map" style={{color: "white", position: "absolute", bottom: 5, left:'40%'}} >Zoo map {'>'}</Link>
                        </CardFooter>
                    </Card.ImgOverlay>
                </Card>
                <Card >
                    <CardImg src={Hippo} alt="Hippo" />
                    <Card.ImgOverlay  style={{ color: "black" }}>
                        <Card.Title>Online </Card.Title>
                        <Card.Title >tickets</Card.Title>
                        <CardFooter>
                            <Link to="/buyingticket" style={{color: "white", position: "absolute", bottom: 5, left:'35%'}}> Save your time! {'>'}</Link>
                        </CardFooter>
                    </Card.ImgOverlay>
                </Card>
                <Card >
                    <CardImg src={Panda} alt="Panda" />
                    <Card.ImgOverlay style={{ color: "white" }}>
                        <Card.Title>Lots going on </Card.Title>
                        <Card.Title>with tons of news </Card.Title>
                        <CardFooter>
                            <Link to="/allnews" className="mx-auto" style={{color: "white", position: "absolute", bottom: 5,left:'35%'}}> News from the zoo {'>'}</Link>
                        </CardFooter>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </section>
    );
};

export default HoursInformation;