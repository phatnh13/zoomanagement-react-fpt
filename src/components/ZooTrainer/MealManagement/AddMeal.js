import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Pagination, Button, Card, Form } from "react-bootstrap";
import FoodAddListContent from "./Modal/FoodAddListContent";
import { DateHelper } from "../../DateHelper";
import { Link, useLocation } from "react-router-dom";
function AddMeal() {
    const [foodList, setFoodList] = useState([]);
    const [foodAddList, setFoodAddList] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
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

    const location = useLocation();
    const animalUserId = location.state.animalUserId;
    const animal = location.state.animal;
    const [time, setTime] = useState(DateHelper.getNowTime());
    const [note, setNote] = useState("");

    let handleAddMeal = () => {
        var newMeals = foodAddList.map(food => (
            {
                animalUserId: animalUserId,
                foodId: food.foodId,
                note: note,
                feedingTime: DateHelper.formatTime(time),
            }
        ));
        fetch(`https://vietnamzoo.azurewebsites.net/api/Meal`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
        },
        body: JSON.stringify(newMeals),
        })
        .then((res) => {
            if (res.ok) {
                alert("Add meal success!");
                newMeals = [];
                setNote("");
            }
            else {
                alert("Add meal failed!");
            }
        })
        .catch(rejected => {
            console.log(rejected);
        });
        setFoodAddList([]);
    }
    useEffect(() => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/Food?pageNumber=${currentPage}&searchBy=FoodName`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setFoodList(data.pagingList);
                setTotalPages(data.totalPages);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, [currentPage]);
    return (
        <Container fluid>
            <Row className="mt-2">
                <Col lg={1} md={1} sm={1    } className="d-flex justify-content-start">
                    <Link className="btn" size="sm" to={"/trainer/animal"}>{"<"} Back</Link>
                </Col>
                <Col>
                    <h1 className="text-align-center">Adding <span className="text-danger">{animal.animalName}'s</span> Meal</h1>
                </Col>
                <hr/>
            </Row>
            <Row className="d-flex justify-content-center mt-2">
                <Col lg={6} md={6} sm={12}>
                    <Row className="mb-2">
                        <Card bordered>
                            <Card.Body >
                                <Card.Title>Add Meal Form</Card.Title>
                                <Form>
                                    <Form.Group className="mb-2">
                                        <Row>
                                            <Col lg={3} md={3} sm={4}>
                                                <Form.Label>Feeding Time</Form.Label></Col>
                                            <Col>
                                                <Form.Control
                                                    type="time"
                                                    value={time}
                                                    onChange={e => { setTime(e.target.value) }} /></Col>
                                        </Row>
                                    </Form.Group>
                                    <Form.Group>
                                        <Row>
                                            <Col lg={3} md={3} sm={4}>
                                                <Form.Label>Note</Form.Label></Col>
                                            <Col>
                                                <Form.Control
                                                    type="text"
                                                    value={note}
                                                    onChange={e => { setNote(e.target.value) }} /></Col>
                                        </Row>
                                    </Form.Group>
                                </Form>
                                <Row className="d-flex justify-content-center mt-2 p-3">
                                    <Button variant="outline-success" size="sm" onClick={handleAddMeal}>Add Meal</Button>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                    <h2>Food list</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Food ID</th>
                                <th>Food Name</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {foodList.map((food, index) => {
                                const handleAddToList = () => {
                                    if (
                                        !foodAddList.some(e => {
                                            if (e.foodId === food.foodId) return true;
                                            return false;
                                        })
                                    ) {
                                        setFoodAddList([
                                            ...foodAddList,
                                            {
                                                foodName: food.foodName,
                                                foodId: food.foodId,
                                            }
                                        ])
                                    }
                                }
                                return (
                                    <tr key={index}>
                                        <td>{food.foodId}</td>
                                        <td>{food.foodName}</td>
                                        <td><Button
                                            onClick={handleAddToList} >
                                            Add</Button></td>
                                    </tr>)
                            })}
                        </tbody>
                    </Table>
                    <Pagination>{PaginationLoad()}</Pagination>
                </Col>

                <Col>
                    <h2>Food add list</h2>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th className="col-8">Food Name</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foodAddList.map((food, index) => {
                                return <FoodAddListContent index={index} food={food} foodAddList={foodAddList} setFoodAddList={setFoodAddList} />
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>

        </Container>
    )
}

export default AddMeal;