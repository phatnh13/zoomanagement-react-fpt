import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import TigerImg from "../../assets/Tigerbackground.png";
import WebLogo from "../../assets/WebLogo.png";
import MapLogo from "../../assets/MapLogo.png";
import Layout from "../Layout";
import Footer from "../Footer/Footer";
const Home = () => {
    return (
        <>
        <Layout />
            <h1>Hello</h1>
        <Footer />
        </>
    );
};

export default Home;