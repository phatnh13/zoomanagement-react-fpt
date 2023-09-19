import React from "react";
import TigerImg from "../../assets/whiteTiger.jpg";
import WebLogo from "../../assets/WebLogo.png";
import "./BuyTicket.css"
import { Col } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaYoutube, FaInstagram } from "react-icons/fa6";
const Cart = () => {
    return (
        <>
        <div className="header-img">
            <div className="logo-box">
                <div className="logo">
                    <div className="text-logo-top">VietNam Zoo</div>
                    <div className="text-logo-down">Since 1864</div>
                    <img className="web-logo" alt="WebLogo" src={WebLogo} />
                    <div className="text-right">
                        <div>Back to Zoo Website</div>
                        <Col className="footer-social-icon">
                            <FaFacebook className="footer-icon" />
                            <FaGoogle className="footer-icon" />
                            <FaInstagram className="footer-icon" />
                            <FaYoutube className="footer-icon" />
                        </Col>
                    </div>


                </div>
            </div>
            <img className="white-tiger-backgroud" alt="Tiger" src={TigerImg} />
            </div>
        </>
    );
};

export default Cart;