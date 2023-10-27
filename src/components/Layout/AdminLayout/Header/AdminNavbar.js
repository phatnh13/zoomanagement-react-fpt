import React from "react";
import { NavDropdown, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../UserContext";
const AdminNavbar = () => {
    // const name = JSON.parse(localStorage.getItem("loginUser")).userName;
    const name = "Admin";
    // const UserContext = useContext(UserContext)
    // const name = UserContext.user.userName;
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("loginUser");
        navigate("/login");
    }
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
                            <NavDropdown.Item href="/profile-admin">Profile</NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}
export default AdminNavbar;