import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function AddCageModal({ show, handleClose, reloadState }) {
    const [cageName, setCageName] = useState("");
    const [areaId, setAreaId] = useState("");

    let handleAddCage = async () => {
        console.log("Add cage");
        console.log("Cage name: " + cageName);
        console.log("Area name: " + areaId);
        await fetch("https://localhost:7193/api/Cage", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("token")),
            },
            body: JSON.stringify({
                cageName: cageName,
                areaId: areaId
                
            }),
        })
            .then((res) => {
                if (res.ok) {
                    alert("Add cage successfully");
                    reloadState.setReload(!reloadState.reload);
                    handleClose();
                } else {
                    alert("Add cage failed");
                }
            })
            .catch(rejected => {
                console.log(rejected);
            });    
            reloadState.setReload(!reloadState.reload);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="cageName">
                        <Form.Label>Cage Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="enter cage name"
                            value={cageName}
                            onChange={(e) => {
                                setCageName(e.target.value);
                            }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="areaId">
                        <Form.Label>Area ID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="enter area name"
                            value={areaId}
                            onChange={(e) => {
                                setAreaId(e.target.value);
                            }} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAddCage}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddCageModal;