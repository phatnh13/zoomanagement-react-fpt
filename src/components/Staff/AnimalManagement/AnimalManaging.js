import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination, Col, Row, Container, Form, Button, Card } from "react-bootstrap";
import AnimalTable from "./Animal/AnimalTable";
import FoodTable from "./Food/FoodTable";

function AnimalManaging() {

    const [animalList, setAnimalList] = useState([]);
    const [searchAnimalBy, setSearchAnimalBy] = useState("AnimalName");
    const [searchAnimalString, setSearchAnimalString] = useState("");
    const [totalAnimalPages, setTotalAnimalPages] = useState(0);
    const [currentAnimalPage, setCurrentAnimalPage] = useState(1);

    const navigate = useNavigate();
    //Dummy state to force re-render
    const [reload, setReload] = useState(false);

    //#region Pagination
    let PaginationAnimalLoad = () => {
        let items = [];
        if (totalAnimalPages > 1) {
            for (let page = 1; page <= totalAnimalPages; page++) {
                items.push(<Pagination.Item key={page} onClick={onAnimalPaginationClick}>{page}</Pagination.Item>)
            }
        }
        return items;
    }
    const onAnimalPaginationClick = (e) => {
        setCurrentAnimalPage(e.target.text);
    }
    //#endregion

    let handleAdd = () => {
        navigate("/staff/animal/add");
    }
    useEffect(() => {
        fetch(`https://localhost:7193/api/Animal?pageNumber=${currentAnimalPage}&searchBy=${searchAnimalBy}&searchString=${searchAnimalString}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setAnimalList(data.pagingList);
                setTotalAnimalPages(data.totalPages);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, [reload, currentAnimalPage, searchAnimalBy, searchAnimalString]);

    return (
        <Container fluid>
            <Row className="vh-20 d-flex justify-content-center align-items-center m-3 pb-1 border-bottom">
                {/*Start search*/}
                {/*Search filter */}
                <Col lg={3} md={3} xs={12}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Select
                            value={searchAnimalBy}
                            onChange={(e) => {
                                setSearchAnimalBy(e.target.value)
                            }}
                        >
                            <option value={"FullName"}>Animal Name</option>
                            <option>Name</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                {/*Search bar */}
                <Col lg={8} md={8} xs={11}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={searchAnimalString}
                            onChange={(e) => { setSearchAnimalString(e.target.value) }}>
                        </Form.Control>
                    </Form.Group>
                </Col>
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
                <Col>
                    {/*Start Table*/}
                    <AnimalTable animalList={animalList} reloadState={{ reload, setReload }} />
                    {/*Start Table*/}
                    <Pagination size="md" className="d-flex justify-content-center">
                        {PaginationAnimalLoad()}
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
}

export default AnimalManaging;