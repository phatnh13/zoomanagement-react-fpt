import React, { useEffect } from "react";
import { Button, Modal, Table, Container } from "react-bootstrap";

function AnimalShowCageModal({ show, handleClose, animal, currentCage, CageList }) {
    
    useEffect(() => {
        
    }, [animal.animalId]);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cage</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <h5>Current Cage:</h5>
                    <Table>
                        <thead>
                            <tr>
                                <th>Cage Area</th>
                                <th>Cage ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{currentCage?.area?.areaId}</td>
                                <td>{currentCage?.area?.areaName}{currentCage.cageId}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
                <Container>
                    <h5>History Cage:</h5>
                    <Table>
                        <thead>
                            <tr>
                                <th>Cage Area</th>
                                <th>Cage ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CageList.map((cage, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{cage.area.areaId}</td>
                                        <td>{cage.area.areaName}{cage.cageId}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AnimalShowCageModal;