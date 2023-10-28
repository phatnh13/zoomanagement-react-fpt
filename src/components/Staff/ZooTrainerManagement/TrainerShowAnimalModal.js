import React from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { DateHelper } from "../../DateHelper";

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
                                <td className="col-1">{animal.animalId}</td>
                                <td className="col-1">{animal.speciesId}</td>
                                <td className="col-2">{animal.animalName}</td>
                                <td className="col-2">{DateHelper.formatDate(animal.dateArrive)}</td>
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