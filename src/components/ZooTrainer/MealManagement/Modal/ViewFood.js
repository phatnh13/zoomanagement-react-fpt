import React from "react";
import { Modal, Form, Button, Row, Col, Image } from "react-bootstrap";
import Delete from "../../../../assets/delete.png";
function ViewFood({ show, handleClose, meal, reloadState}) {
    const foodsList = meal.food;
    return ( 
        <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title>View Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {foodsList.map((food, index) => {
                let handleDeleteMealFood = () => {
                    fetch(`https://vietnamzoo.azurewebsites.net/api/Meal/Meal`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
                        },
                        body: JSON.stringify({
                            animalUserId: meal.animalUserId,
                            feedingTime: meal.feedingTime,
                            foodId: food.foodId
                        })
                    })
                        .then((res) => {
                            if (res.ok) {
                                alert("Delete food food successfully!");
                                handleClose();
                                reloadState.setReload(!reloadState.reload);
                            } else {
                                alert("Delete food food failed!");
                            }
                        }).catch(rejected => {
                            console.log(rejected);
                        });
                }
                return (
                    <Row key={index} className="col-10 mb-1">
                        <Col lg={10} md={10} sm={8}>
                            <Form.Control type="text" value={food.foodName} readOnly/>
                        </Col>
                        <Col lg={2} md={2} sm={4} className="d-grid">
                            <Button variant="outline-danger" size="sm" onClick={handleDeleteMealFood}><Image style={{ height: '1rem', width: '1rem' }} src={Delete}></Image></Button>
                        </Col>
                    </Row>
                )
            })}
        </Modal.Body>
        </Modal>
     )
}

export default ViewFood;