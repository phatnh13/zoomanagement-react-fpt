import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SpeciesTable from './SpeciesTable';

function SpeciesManaging() {
    const [species, setSpecies] = useState(
        [
            {
                id: 1, name: "dog",
                description: "this is a dog"
            },
            {
                id: 2, name: "cat",
                description: "this is a cat"
            },
            {
                id: 3, name: "bird",
                description: "this is a bird"
            },
            {
                id: 4, name: "fish",
                description: "this is a fish"
            },
            {
                id: 5, name: "mouse",
                description: "this is a mouse"
            },
        ]
    );
    var [search, setSearch] = useState("");
    return (
        <Container fluid>
            <Row className="vh-20 d-flex justify-content-center align-items-center m-3 pb-1 border-bottom">
            {/*Start search*/}
                {/*Search filter */}
                <Col lg={3} md={3} xs={12}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Select>
                            <option>Name</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                {/*Search filter */}
                {/*Search bar */}
                <Col lg={8} md={8} xs={11}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => { setSearch(e.target.value) }}>
                        </Form.Control>
                    </Form.Group>
                </Col>
                {/*Search bar */}
            {/*End search*/}
                {/*Start add button*/}
                <Col lg={1} md={1} xs={1}>
                    <div className="mb-3 d-grid">
                        <Button variant="outline-primary" size="sm">Add</Button>
                    </div>
                </Col>
                {/*End add button*/}
            </Row>
            <Row>
                <Col>
                    {/*Start Table*/}
                    <SpeciesTable speciesList={species} />
                    {/*Start Table*/}
                </Col>
            </Row>
        </Container>
    )
}

export default SpeciesManaging;