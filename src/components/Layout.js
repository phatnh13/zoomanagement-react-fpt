import React from "react";
import { Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return <>
        <Nav className="navbars" defaultActiveKey="/" as="ul">
            <Nav.Item as="li" className="m-2">
                <Link className="nav-link" to="/">Home</Link>
            </Nav.Item>
            <Nav.Item as="li" className="m-2">
                <Link className="nav-link" to="/login">Log in</Link>  
            </Nav.Item>
            <Nav.Item as="li" className="m-2">
                <Link className="nav-link" to="/register">register</Link>  
            </Nav.Item>
        </Nav>
        <Outlet />
    </>
};

export default Layout;