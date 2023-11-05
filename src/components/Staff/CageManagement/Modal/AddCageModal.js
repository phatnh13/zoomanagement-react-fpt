import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function AddCageModal({ show, handleClose, reloadState, areasList }) {
    const [cageName, setCageName] = useState("");
    const [areaId, setAreaId] = useState("");
    let handleAddCage = () => {
        fetch("https://vietnamzoo.azurewebsites.net/api/Cage", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token,
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
                    setAreaId("");
                    setCageName("");
                    handleClose();
                } else {
                    alert("Add cage failed");
                }
            })
            .catch(rejected => {
                console.log(rejected);
            });    
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Cage</Modal.Title>
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
                        <Form.Label>Area</Form.Label>
                        <Form.Select value={areaId} onChange={(e) => {setAreaId(e.target.value)}}>
                            <option value={""}>Select an area</option>
                            {areasList.map((area, index) => {
                                return (
                                    <option index={index} value={area.areaId}>{area.areaName}</option>
                                )
                            })}
                        </Form.Select>
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