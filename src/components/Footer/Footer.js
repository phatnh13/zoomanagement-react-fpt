import React from "react";
import { Col, Container } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaYoutube, FaInstagram } from "react-icons/fa6"
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <Container className="footer-infor">
                    <Col className="footer-social-icon">
                        <FaFacebook className="footer-icon" />
                        <FaGoogle className="footer-icon" />
                        <FaInstagram className="footer-icon" />
                        <FaYoutube className="footer-icon" />
                        <p>Công Ty TNHH MTV</p>
                        <p>Thảo Cầm Viên Sài Gòn</p>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Container>
            </div>
            <div className="copy-right">
                <p>Developed by VK3P</p>
            </div>
        </div>
    );
};

export default Footer;