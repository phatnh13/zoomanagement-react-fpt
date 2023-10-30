import React, { useEffect, useState } from "react";
import { Container, Col, Row, Nav, Card, Button } from "react-bootstrap";

function ProfilePage() {
    const userId = JSON.parse(localStorage.getItem('loginUser')).userId;
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`https://localhost:7193/api/Staff/${userId}`,
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": "bearer " + JSON.parse(localStorage.getItem("token"))
                },
            }
        )
            .then((res) => res.json())
            .then(data => {
                setUser(data);
                console.log(data, "data");
                console.log(user, "user");
            }).catch(rejected => {
                console.log(rejected);
            });
    }, []);
    return (
        <Container>
            <Row>
                <Col lg={4} md={3} sx={0}>
                    <h2 className="my-5">Profile Management</h2>
                </Col>
                <Col lg={8} md={9} sx={12} >
                        <Card className="mt-5 mb-3">
                            <Card.Body>
                                <Card.Title>Account Information</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>Change Password</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mb-3" border="0">
                            <Card.Body className="">
                                <Button size="lg" variant="dark">Logout</Button>
                            </Card.Body>
                        </Card>
                </Col>

            </Row>
        </Container>
    )
}

export default ProfilePage;