import React from "react";
import { NavDropdown, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const StaffNavbar = () => {
    const name = JSON.parse(localStorage.getItem("loginUser")).userName;

    const navigate = useNavigate();
    const handleLogout = () => {
        const emptyUser = {
            userId: 0,
            userName: "",
            email: "",
            role: "",
            token: "",
            expiration: ""
        };
        localStorage.setItem("loginUser", JSON.stringify(emptyUser));
        localStorage.setItem("isLoggedIn", "false");
        navigate("/login");
    }
    const handleProfile = () => {
        navigate("/user/profile");
    }
    return (
        <Navbar expand="md" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                        Sài Gòn Zoo
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/staff/trainer"} >Zoo Trainer</Nav.Link>
                        <Nav.Link as={Link} to={"/staff/area-cage"} >Areas/Cages</Nav.Link>
                        <Nav.Link as={Link} to={"/staff/animal"} >Animals</Nav.Link>
                        <Nav.Link as={Link} to={"/staff/food"} >Food</Nav.Link>
                        <Nav.Link as={Link} to={"/staff/news"} >News</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        <NavDropdown title={name} >
                            <NavDropdown.Item onClick={handleProfile}>Profile</NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default StaffNavbar;