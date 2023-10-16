import React from "react";
import TigerImg from "../../assets/SnowTiger.jpg";
import WebLogo from "../../assets/WebLogo.png";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaYoutube, FaInstagram } from "react-icons/fa6";
import Image from 'react-bootstrap/Image';
import "./BuyingTicket.css"

const HeaderCart = () => {
    return (
        <div className="" style={{ height: '15rem', backgroundImage: `url(${TigerImg})` }}>
            <div>
                <div className="logo-box mx-5">
                    <Row>
                        <Col className="col-md-10 mt-5">
                            <Row>
                                <img className="col-md-1" style={{marginLeft: '3rem'}} src={WebLogo} />
                                <Col>
                                    <div className="text-logo-top">VietNam Zoo</div>
                                    <div className="text-logo-down">Since 1864</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="text-right col-md-2 mt-5">
                            <FaFacebook className="footer-icon" />
                            <FaGoogle className="footer-icon" />
                            <FaInstagram className="footer-icon" />
                            <FaYoutube className="footer-icon" />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};
export default HeaderCart;