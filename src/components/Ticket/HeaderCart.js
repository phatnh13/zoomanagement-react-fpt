import React from "react";
import TigerImg from "../../assets/SnowTiger.jpg";
import WebLogo from "../../assets/WebLogo.png";
import { Col, Row, Container } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaYoutube, FaInstagram } from "react-icons/fa6";
import "./BuyingTicket.css"

const HeaderCart = () => {
    return (

        <div style={{ height: '25rem', backgroundImage: `url(${TigerImg})` }}>    
                <div className="logo-box__ticket">
                    
                        {/* <Col className="col-md-10 mt-5">
                            <Row>
                                <img className="col-md-3" alt="web-logo" style={{marginLeft: '3rem'}} src={WebLogo} />
                                <Col>
                                    <div className="text-logo-top">VietNam Zoo</div>
                                    <div className="text-logo-down">Since 1864</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="text-right col-md-2 mt-5">
                            <Row>
                                Back to home
                            </Row>
                            <Row>
                            <FaFacebook className="footer-icon" />
                            <FaGoogle className="footer-icon" />
                            <FaInstagram className="footer-icon" />
                            <FaYoutube className="footer-icon" />
                            </Row>
                        </Col> */}

                </div>
        </div>
    );
};
export default HeaderCart;