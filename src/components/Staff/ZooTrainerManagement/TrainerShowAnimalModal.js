import React from "react";
import { Button, Modal, Table } from "react-bootstrap";

function TrainerShowAnimalModal({ show, handleClose, user, animalList }) {
    return (
        <Modal size="lg" show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{user.fullName}'s animals </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table bordered hover responsive="md">
                    <thead>
                        <tr>
                            <th>Animal ID</th>
                            <th>Species ID</th>
                            <th>Animal Name</th>
                            <th>Date arrived</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animalList.map((animal, index) => 
                        {
                            return (
                            <tr key={index}>
                                <td>{animal.animalId}</td>
                                <td>{animal.speciesId}</td>
                                <td>{animal.animalName}</td>
                                <td>{animal.dateArrive}</td>
                                <td>{animal.status}</td>
                            </tr>
                            )
                        }
                        )}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TrainerShowAnimalModal;