import React, {useState} from "react";
import TrainerTable from "./TrainerTable";
import { Container, Button, Row, Col, Form, Badge } from "react-bootstrap";

function ZooTrainerManaging() {
    const [users, setUsers] = useState(
        [
            {
                id: 1, UserName: "Phuong",
                Gender: "Male", Age: "20", phoneNumber: "0992221",
                Email: "example1@example.com", password: "***", isDelete: "True"
            },
            {
                id: 2, UserName: "Phong",
                Gender: "Male", Age: "20", phoneNumber: "0992222",
                Email: "example2@example.com", password: "***", isDelete: "False"
            },
            {
                id: 3, UserName: "Phat",
                Gender: "Male", Age: "20", phoneNumber: "0992223",
                Email: "example3@example.com", password: "***", isDelete: "True"
            },
            {
                id: 4, UserName: "Viet",
                Gender: "Male", Age: "20", phoneNumber: "0992224",
                Email: "example4@example.com", password: "***", isDelete: "False"
            },
            {
                id: 5, UserName: "Khoi",
                Gender: "Male", Age: "20", phoneNumber: "0992225",
                Email: "example5@example.com", password: "***", isDelete: "True"
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
                            onChange={(e) => {setSearch(e.target.value) }}>
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
                <TrainerTable userList={users} />
            {/*Start Table*/}
                </Col>
            </Row>
        </Container>
     )
}

export default ZooTrainerManaging;