import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TrainerTable from "./TrainerTable";
import { Container, Button, Row, Col, Form, Pagination } from "react-bootstrap";
import { Spin } from "antd";
function ZooTrainerManaging() {
    const [trainer, setTrainer] = useState([]);
    const [searchBy, setSearchBy] = useState("FullName");
    const [searchString, setSearchString] = useState("");
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const navigate = useNavigate();
    //Dummy state for re-rendering
    const [reload, setReload] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
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

    let handleAdd = () => {
        navigate("/staff/trainer/add");
    }
    useEffect(() => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/ZooTrainer?pageNumber=${currentPage}&searchBy=${searchBy}&searchString=${searchString}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setTrainer(data.pagingList);
                setTotalPages(data.totalPages);
                setIsLoading(false);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, [reload, currentPage, searchBy, searchString]);

    return (
        <Container fluid>
            <Row className="vh-20 d-flex justify-content-center align-items-center m-3 pb-1 border-bottom">
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
                            <option value={"PhoneNumber"}>Phone Number</option>
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
                            value={searchString}
                            onChange={(e) => { setSearchString(e.target.value) }}>
                        </Form.Control>
                    </Form.Group>
                </Col>
                {/*Search bar */}
            {/*End search*/}
                {/*Start add button*/}
                <Col lg={1} md={1} xs={1}>
                    <div className="mb-3 d-grid">
                        <Button onClick={handleAdd} variant="outline-primary" size="sm">Add</Button>
                    </div>
                </Col>
                {/*End add button*/}
            </Row>
            <Row>
                {isLoading === true ? (
                    <Col>
                        <Spin />
                    </Col>
                ) : (
                    <Col>
                    <TrainerTable trainerList={trainer} reloadState={{reload, setReload}} />
                    <Pagination size="md" className="d-flex justify-content-center">
                        {PaginationLoad()}
                    </Pagination>
                </Col>
                )}
            </Row>
        </Container>
    )
}

export default ZooTrainerManaging;