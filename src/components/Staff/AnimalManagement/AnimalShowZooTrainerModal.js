import React, { useState } from "react";
import { Button, Modal, Table, Form } from "react-bootstrap";
import { DateHelper } from "../../DateHelper";

function AnimalShowZooTrainerModal({ show, handleClose, animal, trainerList }) {
    const [userId, setUserId] = useState(0); //List of animal of this trainer
    let handleAssignTrainer = () => {
        fetch(`https://localhost:7193/api/AnimalUser`, {
            method: "POST",
            headers: {
                "Content-type": "text/plain; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("token"))
            },
            body: {
                animalId: animal.animalId,
                userId: 0
            }
        })
    }
    return (
        <Modal size="lg" show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{animal.fullName}'s trainers' </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table bordered hover responsive="md">
                    <thead>
                        <tr>
                            <th>Zoo Trainer Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainerList.map((trainer, index) => 
                        {
                            return (
                            <tr key={index}>
                                <td>{trainer.fullName}</td>
                            </tr>
                            )
                        }
                        )}
                    </tbody>
                </Table>
                <Form.Control
                type="text"
                value={userId}
                onChange={(e) => 
                setUserId(e.target.value)}>
                </Form.Control>
                <Button onClick={handleAssignTrainer}>
                    Assign Zoo Trainer
                </Button>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AnimalShowZooTrainerModal;