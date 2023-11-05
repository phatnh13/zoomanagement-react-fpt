import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function UpdateAnimalStatusModal({ show, handleClose, animal, reloadState, updatedStatus, setUpdatedStatus }) {
    //#region Validation
    let [dirty, setDirty] = useState({
        animalStatus: false,
    });
    let [errors, setErrors] = useState(
        {
            animalStatus: [],
        });
    let validate = () => {
        let errorsData = {};
        //animalStatus
        errorsData.animalStatus = [];
        if (updatedStatus === "") {
            errorsData.animalStatus.push("Species name is required");
        }
        if (updatedStatus.length > 20) {
            errorsData.animalStatus.push("Species name must be less than 20 characters");
        }
        setErrors(errorsData);
    }
    //Check valid before submit
    let isValid = () => {
        let valid = true;
        for (let control in errors) {
            if (errors[control].length > 0) {
                valid = false;
            }
        }
        return valid;
    }
    //#endregion
    let handleUpdate = () => {
        // Set all input dirty=true
        let dirtyData = dirty;
        Object.keys(dirty).forEach((control) => {
            dirtyData[control] = true;
        });
        setDirty(dirtyData);

        //Validate all input
        validate();
        if (isValid()) {
            fetch(`https://vietnamzoo.azurewebsites.net/api/Animal`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
                },
                body: JSON.stringify({
                    animalId: animal.animalId,
                    speciesId: animal.speciesId,
                    animalName: animal.animalName,
                    dateArrive: animal.dateArrive,
                    status: updatedStatus
                })
            }).then(res => {
                if (res.ok) {
                    alert("Status updated");
                    reloadState.setReload(!reloadState.reload);
                } else {
                    alert("Update failed");
                }
            }).catch(rejected => {
                console.log(rejected);
            });
        }
    }
    useEffect(() => {
        validate();
    }, [updatedStatus, reloadState.reload]);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update status of {animal.animalName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <div className="text-danger">
                        {dirty["animalStatus"] && errors["animalStatus"][0] ?
                            errors["animalStatus"][0] : ""}
                    </div>
                    <Form.Control
                        type="text"
                        value={updatedStatus}
                        onChange={(e) => { setUpdatedStatus(e.target.value) }} />
                </Form.Group>
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

export default UpdateAnimalStatusModal;