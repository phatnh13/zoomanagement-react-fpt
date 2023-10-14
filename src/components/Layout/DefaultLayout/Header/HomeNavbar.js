import React from "react";
import {Container, Nav, Navbar, Image} from 'react-bootstrap';
import { Link } from "react-router-dom";
import ZooLogo from "../../../../assets/WebLogo.png";

const HomeNavbar = () => {
  return (
    <Container fluid>
        <Navbar expand="lg" variant="light" fixed="top" className="ps-4">
        <Navbar.Brand className="" href="/"><Image src={ZooLogo} width={60} height={60} /> Sai Gon Zoo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto pb-1">
            <Nav.Link as={Link} to={"/login"} >Login</Nav.Link>
            <Nav.Link as={Link} to={"/buyingticket"} >Tickets</Nav.Link>
            <Nav.Link as={Link} to={"/news"} >News</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      </Container>
  )
};

export default HomeNavbar;