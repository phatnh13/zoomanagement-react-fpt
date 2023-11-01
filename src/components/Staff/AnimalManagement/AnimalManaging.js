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

    const [foodList, setFoodList] = useState([]);
    const [foodName, setFoodName] = useState("");
    const [searchFoodString, setSearchFoodString] = useState("");
    const [totalFoodPages, setTotalFoodPages] = useState(0);
    const [currentFoodPage, setCurrentFoodPage] = useState(1);

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
    let PaginationFoodLoad = () => {
        let items = [];
        if (totalFoodPages > 1) {
            for (let page = 1; page <= totalFoodPages; page++) {
                items.push(<Pagination.Item key={page} onClick={onFoodPaginationClick}>{page}</Pagination.Item>)
            }
        }
        return items;
    }

    const onAnimalPaginationClick = (e) => {
        setCurrentAnimalPage(e.target.text);
    }
    const onFoodPaginationClick = (e) => {
        setCurrentFoodPage(e.target.text);
    }
    //#endregion

    let handleAdd = () => {
        navigate("/staff/animal/add");
    }
    let handleAddFood = () => {
        fetch(`https://localhost:7193/api/Food`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
            body: JSON.stringify({
                foodName: foodName
            })
        })
            .then((res) => {
                if (res.ok) {
                    alert("Add food successfully");
                    setReload(!reload);
                } else {
                    alert("Add food failed");
                }
            })
            .catch(rejected => {
                console.log(rejected);
            });
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
    useEffect(() => {
        fetch(`https://localhost:7193/api/Food?pageNumber=${currentFoodPage}&searchBy=FoodName&searchString=${searchFoodString}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setFoodList(data.pagingList);
                setTotalFoodPages(data.totalPages);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, [reload, currentFoodPage, searchFoodString]);

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
            <Row className="">
                <Col lg={6} md={6} sm={12}>
                    <FoodTable foodList={foodList} reloadState={{ reload, setReload }} searchFood={{searchFoodString, setSearchFoodString}} />
                    <Pagination size="md" className="d-flex justify-content-center">
                        {PaginationFoodLoad()}
                    </Pagination>
                </Col>
                <Col>
                    <h1>ADD FOOD</h1>
                    <Card border="0">
                        <Card.Body>
                            <Card.Text>
                                <Row>
                                    <Col>
                                        <Form.Control 
                                        type="text" 
                                        value={foodName}
                                        onChange={(e) => {setFoodName(e.target.value)}}
                                        placeholder="Food name" />
                                    </Col>
                                    <Col lg={4} md={4} sm={4}>
                                        <Button variant="primary" onClick={handleAddFood}>Add</Button>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="border-top "></Row>
        </Container>
    )
}

export default AnimalManaging;