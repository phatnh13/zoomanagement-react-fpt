import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
function AddAreaModal({show, handleClose, reloadState}) {
    const [areaNameAdd, setAreaNameAdd] = useState("");
    const [message, setMessage] = useState("");
    let handleAddArea = () => {
        if(areaNameAdd === ""){
            setMessage("Please enter area name");
            return;
        }
        fetch("https://vietnamzoo.azurewebsites.net/api/Areas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token,
            },
            body: JSON.stringify({
                areaName: areaNameAdd,
            }),
        })
            .then((res) => {
                if (res.ok) {
                    alert("Add area successfully");
                    reloadState.setReload(!reloadState.reload);
                    setAreaNameAdd("");
                    handleClose();
                } else {
                    alert("Add area failed");
                }
            }).catch(rejected => {
                console.log(rejected);
            });
    }
    return ( 
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Area</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="areaName">
                        <Form.Label>Area Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="enter area name"
                            value={areaNameAdd}
                            onChange={(e) => {
                                setAreaNameAdd(e.target.value);
                            }} />
                    </Form.Group>
                    <div>
                        <p className="text-danger">{message}</p>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAddArea}>
                    Add Area
                </Button>
            </Modal.Footer>
        </Modal>
     )
}

export default AddAreaModal;