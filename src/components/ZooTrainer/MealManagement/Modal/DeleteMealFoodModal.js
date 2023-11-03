import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
function DeleteMealFoodModal({ show, handleClose, reloadState, meal }) {
    const [foodId, setFoodId] = useState(0);//food to delete

    let handleDeleteMealFood = () => {
        fetch(`https://localhost:7193/api/Meal/Meal`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
            body: JSON.stringify({
                animalUserId: meal.animalUserId,
                feedingTime: meal.feedingTime,
                foodId: foodId
            })
        })
            .then((res) => {
                if (res.ok) {
                    alert("Delete meal food successfully!");
                    reloadState.setReload(!reloadState.reload);
                    handleClose();
                } else {
                    alert("Delete meal food failed!");
                }
            }).catch(rejected => {
                console.log(rejected);
            });
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                {console.log(meal.food, "meal.food")}
                <Modal.Title>Delete Meal Food</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete this meal food?</p>
                <Form.Select className="my-auto" value={foodId} onChange={(e) => {setFoodId(e.target.value)}}>
                    <option>Choose food</option>
                    {meal.food.map((food, index) => {
                        return <option key={index} value={food.foodId}>{food.foodName}</option>
                    })}
                </Form.Select>
                <Button variant="danger" className="mt-2" onClick={handleDeleteMealFood}>Delete</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteMealFoodModal;