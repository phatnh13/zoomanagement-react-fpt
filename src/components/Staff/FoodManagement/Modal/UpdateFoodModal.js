import React, {useEffect, useState} from "react";
import {Button, Modal, Form} from "react-bootstrap";

function UpdateFoodModal({show, handleClose, food, reloadState}) {
    const [foodName, setFoodName] = useState(food.foodName);
    const [foodId, setFoodId] = useState(food.foodId);

    useEffect(() => {
        setFoodId(food.foodId);
        setFoodName(food.foodName);
    }, [food]);

    let handleUpdate = () => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/Food`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
            body: JSON.stringify({
                foodId: foodId,
                foodName: foodName
            })
        })
            .then((res) => {
                if (res.ok) {
                    alert("Update food successfully");
                    reloadState.setReload(!reloadState.reload);
                    handleClose();
                } else {
                    alert("Update food failed");
                }
            }).catch(rejected => {
                console.log(rejected);
            });
    }
    return ( 
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Updating</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Update <span className="text-danger">{food.foodName}</span> to: <Form.Control type="text" value={foodName} onChange={(e) => { setFoodName(e.target.value) }} placeholder="Food name" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
     )
}

export default UpdateFoodModal;