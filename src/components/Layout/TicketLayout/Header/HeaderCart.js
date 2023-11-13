import React from "react";
import TigerImg from "../../../../assets/SnowTiger.jpg";
import WebLogo from "../../../../assets/WebLogo.png";
import { Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaYoutube, FaInstagram } from "react-icons/fa6";
import "./HeaderCart.css";

const HeaderCart = () => {
    return (

        <div style={{ height: '15rem', backgroundImage: `url(${TigerImg})` }}>
            <div className="logo-box__ticket">
                <Col className="header-left col-md-10">
                    <Row>
                    <Col className="zoo-logo col-md-2">
                        <Link to ='/'>
                        <Image src={WebLogo} />
                        </Link>
                        
                    </Col>
                    <Col className="col-md-3">
                        <Row>
                            <div className="text-logo__top--right">VietNam Zoo</div>
                        </Row>
                        <Row>
                            <div className="text-logo__down--right">Since 1864</div>
                        </Row>
                    </Col>
                    </Row>
                </Col>
                <Col className="header-left col-md-2">
                    <div className="text-logo__top--left">
                        <Link className="link-underline-hover" style={{ color: 'white', textDecoration: 'none' }} to="/">
                        Back to home{" >"}
                        </Link>
                    </div>
                </Col>
            </div>
        </div>
    );
};
export default HeaderCart;