import React, {useState} from "react";
import { Accordion, Button, Image } from "react-bootstrap";
import SpeciesDeleteModal from "./SpeciesDeleteModal";
import { useNavigate } from "react-router-dom";


function SpeciesTableContent({ species, index, reloadState }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    let handleUpdateSpecies = () => {
        navigate("/admin/species/update/", { state: { species: species } });
    }

    let handleDelete = () => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/Species/${species.speciesId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => {
                if (res.ok) {
                    reloadState.setReload(!reloadState.reload); 
                } else {
                    alert("Delete species failed");
                }
            })
            .catch(rejected => {
                console.log(rejected);
            });
        handleClose();
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
                {/* <img src={species.image} alt="species" width="100%" height="auto" /> */}
                <Image src={species.image} alt="species" width="300rem" height="300rem" />
                <div className="my-2">
                <Button variant="danger" className="me-2" onClick={handleShow}>Delete</Button>
                <Button variant="warning" onClick={handleUpdateSpecies}>Update</Button>
                </div>
            </Accordion.Body>
            <SpeciesDeleteModal show={show} handleClose={handleClose} handleDelete={handleDelete} species={species} />
        </Accordion.Item>
    )
}

export default SpeciesTableContent;