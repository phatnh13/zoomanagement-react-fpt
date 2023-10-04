import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./Home.css";
import TigerBackground from "../../assets/Tigerbackground.png";
const Home = () => {
    return (
        <>
            <Container fluid className="vh-100">
            <Image className="bg-img" src={TigerBackground} fluid>
            </Image>
            </Container>
        </>
    );
};

export default Home;