import React from "react";
import { useState, useEffect } from "react";
import { Container, Table, Button, Row, Col, Form, Badge } from "react-bootstrap";
import AdminNavbar from "./AdminNavbar";

const Admin = () => {
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
    // useEffect(() => {
    //     fetch("http://localhost:5000/users")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setUsers(data);
    //         });
    // }, []);
    return (
        <>
            <AdminNavbar />
            <Row className="vh-20 d-flex justify-content-center align-items-center m-3 pb-1 border-bottom">
                <Col lg={3} md={8} xs={12}>
                </Col>
                <Col className="" lg={9} md={8} xs={12}>
                    <Form.Group className="mb-3" controlId="search">
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => {setSearch(e.target.value)}}>
                    </Form.Control>
                    </Form.Group>
                </Col>

            </Row>
            <Container>
                <div className="text-center text-uppercase" >
                    <h3>staff's managing table <Badge size="sm" bg="secondary">2</Badge></h3>
                </div>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>UserName</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>phoneNumber</th>
                            <th>Email</th>
                            <th className="col-1">password</th>
                            <th className="col-1">isDelete</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Male</td>
                            <td>20</td>
                            <td>0992222</td>
                            <td>mark@example.com</td>
                            <td>***</td>
                            <td>True</td>
                            <td className="text-center">
                                <Button variant="outline-primary" size="sm">Update</Button>
                            </td>
                            <td className="text-center">
                                <Button variant="outline-primary" size="sm">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

        </>
    );
}
// let renderTableData(users) => {
//     return users.map((user, index) => {
// }
export default Admin;