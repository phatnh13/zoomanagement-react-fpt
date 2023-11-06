import React, { useState } from "react";
import { Container, Table, Row, Col, Form, Button } from "react-bootstrap";
import FoodTableContent from "./FoodTableContent";
const FoodTable = ({ foodList, reloadState, searchFood }) => {
    const [foodNameAdd, setfoodNameAdd] = useState("");
    let handleAddFood = () => {
        if(foodNameAdd === ""){
            alert("Food name is required");
            return;
        }
        fetch(`https://vietnamzoo.azurewebsites.net/api/Food`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
            body: JSON.stringify({
                foodName: foodNameAdd
            })
        })
            .then((res) => {
                if (res.ok) {
                    setfoodNameAdd("");
                    alert("Add food successfully");
                    reloadState.setReload(!reloadState.reload);
                } else {
                    alert("Add food failed");
                }
            })
            .catch(rejected => {
                console.log(rejected);
            });
    }
    return (
        <Container>
            <Row className="vh-20 d-flex justify-content-center align-items-center pb-1 m-3 border-bottom">
                <Col lg={1} md={1}>
                    SEARCH FOOD
                </Col>
                {/*Search bar */}
                <Col lg={5} md={5} xs={8} className="">
                    <Form.Group className="" controlId="search">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={searchFood.searchFoodString}
                            onChange={(e) => { searchFood.setSearchFoodString(e.target.value) }}>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col lg={1} md={1}>
                    ADD FOOD
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                value={foodNameAdd}
                                onChange={(e) => { setfoodNameAdd(e.target.value) }}
                                placeholder="Food name" />
                        </Col>
                        <Col lg={4} md={4} sm={6}>
                            <Button variant="primary" onClick={handleAddFood}>Add Food</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th className="col-1">Food ID</th>
                        <th className="col-7">Food Name</th>
                        <th className="col-2"></th>
                        <th className="col-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {foodList.map((food, index) => {
                        return <FoodTableContent 
                        key={index} 
                        reloadState={reloadState} 
                        food={food} />;
                    })}
                </tbody>
            </Table>
        </Container>
    )
}
export default FoodTable;