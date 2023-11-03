import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
function SkillManaging() {
    return ( 
        <Container fluid>
            <Row className="d-flex justify-content-center mt-5">
                <Col lg={8} md={8} sm={12}>
                    <Card>
                        <Card.Body>
                            <Card.Title as={"h2"}>Your Skills</Card.Title>
                            <Card.Text>
                                <Card>
                                    <Card.Body>
                                        <Card.Text>
                                            Some quick example text to build on the card title
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
     )
}

export default SkillManaging;