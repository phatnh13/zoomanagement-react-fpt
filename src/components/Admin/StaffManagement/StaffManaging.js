import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Form, Pagination } from "react-bootstrap";
import StaffTable from "./StaffTable";
const StaffManaging = () => {

    var [users, setUsers] = useState([]);
    var [searchString, setsearchString] = useState("");
    var [totalPages, setTotalPages] = useState(0);
    var [currentPage, setCurrentPage] = useState(1);
    var [searchBy, setSearchBy] = useState("FullName");

    let PaginationLoad = () => {
        let items = [];
        for (let page = 1; page <= totalPages; page++) {
            items.push(<Pagination.Item key={page} onClick={onPaginationClick}>{page}</Pagination.Item>)
        }
        return items;
    }

    const onPaginationClick = (e) => {
        setCurrentPage(e.target.text);
    }

    useEffect(() => {
        fetch(`https://localhost:7193/api/Staff?pageNumber=${currentPage}&searchBy=${searchBy}&searchString=${searchString}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })
            .then((res) => res.json())
            .then(data => {
                setUsers(data.pagingList);
                setTotalPages(data.totalPages);
            }).catch(rejected => {
                console.log(rejected);
            });
    },[currentPage, searchBy, searchString]);

    useEffect(() => {
        fetch("https://localhost:7193/api/Staff?searchBy=FullName", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })
            .then((res) => res.json())
            .then(data => {
                setUsers(data.pagingList);
                setTotalPages(data.totalPages);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, []);
    
    return (
        <Container fluid>
            <Row className="vh-20 d-flex justify-content-center my-3 pb-1 border-bottom">
                {/*Start search*/}
                {/*Search filter */}
                <Col lg={3} md={3} xs={12}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Select 
                            value={searchBy}
                            onChange={(e) => { 
                                setSearchBy(e.target.value)
                            }}
                        >
                            <option value={"FullName"}>Full Name</option>
                            <option value={"Email"}>Email</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                {/*Search filter */}
                {/*Search bar */}
                <Col lg={6} md={6} xs={11}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={searchString}
                            onChange={(e) => { 
                                setCurrentPage(1);
                                setsearchString(e.target.value)
                                console.log(searchString);
                                // searchStaff();

                            }}
                        >
                        </Form.Control>
                    </Form.Group>
                </Col>
                {/* <Col lg={1} md={1} xs={1}>
                    <div className="pb-1">
                        <Button variant="outline-primary" onClick={searchStaff}>Search</Button>
                    </div>
                </Col> */}
                {/*Search bar */}
                {/*End search*/}
                {/*Start add button*/}
                <Col lg={1} md={1} xs={1}>
                    <Button href="/admin/staff/add" variant="outline-primary">Add</Button>
                </Col>
                {/*End add button*/}
            </Row>
            <Row>
                <Col>
                    {/*Start Table*/}
                    <StaffTable userList={users} />
                    {/*End Table*/}
                    <Pagination size="md" className="d-flex justify-content-center">
                        {PaginationLoad()}
                    </Pagination>
                </Col>
            </Row>
        </Container>

    )
}

export default StaffManaging;