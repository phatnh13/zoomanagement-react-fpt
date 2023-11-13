import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaYoutube, FaInstagram, FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <Container className="footer-infor">
                    <Row>
                        <Col className="footer-social-icon mt-3">
                            <FaFacebook className="footer-icon" />
                            <FaGoogle className="footer-icon" />
                            <FaInstagram className="footer-icon" />
                            <FaYoutube className="footer-icon" />
                            <p className="mt-4">Project Web</p>
                            <p>VK3P SaiGon</p>
                        </Col>
                        <Col className="footer-location-icon mt-3">
                            <p>
                                <BiLogoGmail className="contact-icon" />
                                saigonzoo.vk3p@gmail.com
                            </p>
                            <p>
                                <FaLocationDot className="contact-icon" />
                                E2a-7, D1 Street, Long Thạnh Mỹ, Thu Duc City, TP HCM
                            </p>
                            <p>
                                <FaPhoneFlip className="contact-icon" />
                                0949 769 812
                            </p>
                        </Col>
                        <Col className="opening-hour-footer">
                            <p>OPENING DAY</p>
                            <p>MONDAY - SUNDAY</p>
                            <p>9:00 AM - 6:30 PM</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;