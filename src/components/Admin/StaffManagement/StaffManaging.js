import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Form, Pagination } from "react-bootstrap";
import StaffTable from "./StaffTable";
import { useNavigate } from "react-router-dom";
import { Spin } from 'antd';
const StaffManaging = () => {

    const [users, setUsers] = useState([]);
    const [searchString, setsearchString] = useState("");
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchBy, setSearchBy] = useState("FullName");

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [reload, setReload] = useState(false);

    //#region Pagination
    let PaginationLoad = () => {
        let items = [];
        if (totalPages > 1) {
            for (let page = 1; page <= totalPages; page++) {
                items.push(<Pagination.Item key={page} onClick={onPaginationClick}>{page}</Pagination.Item>)
            }
        }
        return items;
    }

    const onPaginationClick = (e) => {
        setCurrentPage(e.target.text);
    }
    //#endregion

    let handleAddStaff = () => {
        navigate("/admin/staff/add");
    }

    useEffect(() => {

        fetch(`https://vietnamzoo.azurewebsites.net/api/Staff?pageNumber=${currentPage}&searchBy=${searchBy}&searchString=${searchString}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setUsers(data.pagingList);
                setTotalPages(data.totalPages);
                setIsLoading(false);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, [currentPage, searchBy, searchString, reload]);
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
                            <option value={"PhoneNumber"}>PhoneNumber</option>

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
                            }}
                        >
                        </Form.Control>
                    </Form.Group>
                </Col>
                {/*Start add button*/}
                <Col lg={1} md={1} xs={1}>
                    <Button variant="outline-primary" onClick={handleAddStaff}>Add</Button>
                </Col>
            </Row>
            <Row>
                {isLoading ? (
                    <Col>
                        <h1><Spin /></h1>
                    </Col>
                ) : (
                    <Col>
                        {/*Start Table*/}
                        <StaffTable userList={users} reloadState={{reload, setReload}} />
                        <Pagination size="md" className="d-flex justify-content-center">
                            {PaginationLoad()}
                        </Pagination>
                    </Col>
                )}
            </Row>


        </Container>
    )
}

export default StaffManaging;