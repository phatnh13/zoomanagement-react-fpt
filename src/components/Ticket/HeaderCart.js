import React from "react";
import TigerImg from "../../assets/whiteTiger.jpg";
import WebLogo from "../../assets/WebLogo.png";
import { Col } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaYoutube, FaInstagram} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import "./BuyingTicket.css"

const HeaderCart = () => {
    return (
        <>
            <div className="header-img">
                <div className="logo-box">
                    <div className="text-logo-top">VietNam Zoo</div>
                    <div className="text-logo-down">Since 1864</div>
                    <img className="web-logo" alt="WebLogo" src={WebLogo} />
                    <div className="text-right">
                        <Col className="footer-social-icon">
                            <FaFacebook className="footer-icon" />
                            <FaGoogle className="footer-icon" />
                            <FaInstagram className="footer-icon" />
                            <FaYoutube className="footer-icon" />
                        </Col>
                    </div>
                </div>
                <Image src={TigerImg} className="tiger-img" fluid />
            </div>
        </>
    );
};
export default HeaderCart;