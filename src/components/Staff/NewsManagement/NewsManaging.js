import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
function NewsManaging() {
    return ( 
        <Container fluid>
            <Row className="vh-20 d-flex justify-content-center align-items-center m-3 pb-1 border-bottom">
                {/*Start add button*/}
                <Col>
                    <div className="mb-3 d-grid">
                        <Button href='/staff/news/add' variant="outline-primary" size="sm">Add news</Button>
                    </div>
                </Col>
                {/*End add button*/}
            </Row>
            <Row>
                <Col>
                    {/*Start Table*/}
                    
                    {/*Start Table*/}
                </Col>
            </Row>
        </Container>
     )
}

export default NewsManaging;