import React, {useState} from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import CageTable from "./CageTable";

function CageManaging() {
    const [cages, setCages] = useState(
        [
            {
                id: 1, name: "Cage 1", areaName: "Area 1"
            },
            {
                id: 2, name: "Cage 2", areaName: "Area 2"
            },
            {
                id: 3, name: "Cage 3", areaName: "Area 3"
            },
            {
                id: 4, name: "Cage 4", areaName: "Area 4"
            },
            {
                id: 5, name: "Cage 5", areaName: "Area 5"
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
                    <CageTable cageList={cages} />
                    {/*Start Table*/}
                </Col>
            </Row>
        </Container>
    )
}

export default CageManaging;