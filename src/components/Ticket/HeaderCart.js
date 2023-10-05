import React from "react";
import TigerImg from "../../assets/whiteTiger.jpg";
import WebLogo from "../../assets/WebLogo.png";
import { Col } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaYoutube, FaInstagram} from "react-icons/fa6";
import Image from 'react-bootstrap/Image';
import "./BuyingTicket.css"

const HeaderCart = () => {
    return (
        <>
            <div className=".d-flex">
                <div className="logo-box position-absolute mx-5">
                    <div className="text-logo-top ms-auto">VietNam Zoo</div>
                    <div className="text-logo-down ms-auto">Since 1864</div>
                    <img className="mt-3 ms-3" alt="WebLogo" src={WebLogo} />
                        <Col className="footer-social-icon text-right">
                            <FaFacebook className="footer-icon" />
                            <FaGoogle className="footer-icon" />
                            <FaInstagram className="footer-icon" />
                            <FaYoutube className="footer-icon" />
                        </Col>
                </div>
                <Image src={TigerImg} className="tiger-img"/>
            </div>
        </>
    );
};
export default HeaderCart;