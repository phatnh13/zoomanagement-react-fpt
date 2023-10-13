import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
const AdminNavbar = () => {
    const name = JSON.parse(localStorage.getItem("loginUser")).userName;
    return (
            <Navbar expand="md" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Sài Gòn Zoo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/admin/staff"} >Staff</Nav.Link>
                        <Nav.Link as={Link} to={"/admin/species"} >Species</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        <NavDropdown title= {name} >
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}
export default AdminNavbar;