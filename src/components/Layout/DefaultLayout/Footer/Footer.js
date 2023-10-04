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
                        <Col className="footer-social-icon">
                            <FaFacebook className="footer-icon" />
                            <FaGoogle className="footer-icon" />
                            <FaInstagram className="footer-icon" />
                            <FaYoutube className="footer-icon" />
                            <p>Công Ty TNHH MTV</p>
                            <p>Thảo Cầm Viên Sài Gòn</p>
                        </Col>
                        <Col className="footer-location-icon">
                            <p>
                                <BiLogoGmail className="contact-icon" />
                                cskh.kdttsaigonzoo@gmail.com
                            </p>
                            <p>
                                <FaLocationDot className="contact-icon" />
                                2 Nguyễn Bỉnh Khiêm, Bến Nghé, Quận 1, Hồ Chí Minh 700000
                            </p>
                            <p>
                                <FaPhoneFlip className="contact-icon" />
                                028 38291425
                            </p>
                        </Col>
                        <Col className="opening-hour-footer">
                            <p>OPENING DAY</p>
                            <p>MONDAY - SUNDAY</p>
                            <p>7:00 AM - 5:30 PM</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;