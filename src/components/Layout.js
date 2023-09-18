import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Layout = () => {
    return <div className="navs-header" >
        <Nav className="navbars" defaultActiveKey="/" as="ul">
            <Nav.Item as="li" className="m-2">
                <Link className="nav-link" to="">Home</Link>
            </Nav.Item>
            <Nav.Item as="li" className="m-2">
                <Link className="nav-link" to="/login">Log in</Link>  
            </Nav.Item>
            <Nav.Item as="li" className="m-2">
                <Link className="nav-link" to="/register">register</Link>  
            </Nav.Item>
            <Nav.Item as="li" className="m-2">
                <Link className="nav=link" to="/buyTicket">Ticket</Link>
                
            </Nav.Item>
        </Nav>
    </div>
};

export default Layout;