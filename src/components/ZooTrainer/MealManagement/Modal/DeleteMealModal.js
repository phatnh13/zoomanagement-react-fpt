import React from "react";
import { Modal, Button } from "react-bootstrap";
function DeleteMealModal({ show, handleClose, reloadState, meal }) {

    let handleDeleteMeal = () => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/Meal/AllMeal`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
            body: JSON.stringify({
                animalUserId: meal.animalUserId,
                feedingTime: meal.feedingTime
            })
        })
            .then((res) => {
                if (res.ok) {
                    reloadState.setReload(!reloadState.reload);
                    handleClose();
                } else {
                    alert("Delete meal failed!");
                }
            }).catch(rejected => {
                console.log(rejected);
            });
    }
    return ( 
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Meal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete meal at <span className="text-danger">{meal.feedingTime}</span> ?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                <Button variant="danger" onClick={handleDeleteMeal}>Delete</Button>
            </Modal.Footer>
        </Modal>
     )
}

export default DeleteMealModal;