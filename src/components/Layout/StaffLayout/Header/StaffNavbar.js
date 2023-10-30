import React from "react";
import { NavDropdown, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const StaffNavbar = () => {
    const name = JSON.parse(localStorage.getItem("loginUser")).userName;
    
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
            <Navbar expand="md" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Sài Gòn Zoo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/staff/trainer"} >Zoo Trainer</Nav.Link>
                        <Nav.Link as={Link} to={"/staff/area-cage"} >Areas/Cages</Nav.Link>
                        <Nav.Link as={Link} to={"/staff/animal"} >Animals</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        <NavDropdown title= {name} >
                            <NavDropdown.Item href="/profile-staff">Profile</NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}
export default StaffNavbar;