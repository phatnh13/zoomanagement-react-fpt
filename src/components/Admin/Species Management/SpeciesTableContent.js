import React, {useState} from "react";
import { Accordion, Button } from "react-bootstrap";
import SpeciesDeleteModal from "./SpeciesDeleteModal";

function SpeciesTableContent({ species, index }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let handleDelete = () => {
        fetch(`https://localhost:7193/api/Species/${species.SpeciesId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);

            }).catch(rejected => {
                console.log(rejected);
            });
        handleClose();
        window.location.reload(false);
    }

    return (
        <Accordion.Item eventKey={index}>
            <Accordion.Header>{species.speciesName}</Accordion.Header>
            <Accordion.Body>
                <p><strong>Family: </strong> {species.family}</p>
                <p><strong>Information:</strong> {species.information}</p>
                <p><strong>Characteristic: </strong> {species.characteristic}</p>
                <p><strong>Allocation: </strong> {species.allocation}</p>
                <p><strong>Ecological: </strong> {species.ecological}</p>
                <p><strong>Diet: </strong> {species.diet}</p>
                <p><strong>Breeding and reproduction: </strong> {species.breedingAndReproduction}</p>
                <Button variant="danger" className="me-2" onClick={handleShow}>Delete</Button>
                <Button variant="warning">Edit</Button>
            </Accordion.Body>
            <SpeciesDeleteModal show={show} handleClose={handleClose} handleDelete={handleDelete} species={species} />
        </Accordion.Item>
    )
}

export default SpeciesTableContent;