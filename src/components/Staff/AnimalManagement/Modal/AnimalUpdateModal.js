import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { DateHelper } from "../../../DateHelper";

function AnimalUpdateModal({ show, handleClose, animal, reloadState }) {
    const [localAnimalName, setLocalAnimalName] = useState(animal.animalName);
    const [localDateArrive, setLocalDateArrive] = useState(DateHelper.formatDateForInput(animal.dateArrive));
    const [localStatus, setLocalStatus] = useState(animal.status);
    const [speciesId, setSpeciesId] = useState(animal.species.speciesId);
    const [speciesList, setSpeciesList] = useState([]);

    let handleUpdate = () => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/Animal`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
            body: JSON.stringify({
                animalId: animal.animalId,
                animalName: localAnimalName,
                dateArrive: localDateArrive,
                speciesId: speciesId,
                status: localStatus
            })
        })
            .then((res) => {
                if (res.ok) {
                    reloadState.setReload(!reloadState.reload);
                    handleClose();
                } else {
                    alert("Update animal failed");
                }
            }).catch(rejected => {
                console.log(rejected);
            });
    }
    useEffect(() => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/Species/GetAllSpecies`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setSpeciesList(data);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, []);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Animal Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={localAnimalName}
                            onChange={(e) => setLocalAnimalName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date Arrive</Form.Label>
                        <Form.Control
                            type="date"
                            value={localDateArrive}
                            onChange={(e) => setLocalDateArrive(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Species Name</Form.Label>
                        <Form.Select value={speciesId} onChange={(e) => { setSpeciesId(e.target.value) }}>
                            <option>Choose Species</option>
                            {speciesList.map((species, index) => {
                                return <option key={index} value={species.speciesId}>{species.speciesName}</option>
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                            type="text"
                            value={localStatus}
                            onChange={(e) => setLocalStatus(e.target.value)}
                        />
                    </Form.Group>
                </Form>
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

export default AnimalUpdateModal;