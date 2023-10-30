import React, { useEffect, useState } from "react";
import {Button, Modal} from "react-bootstrap";

function AnimalShowCageModal({show, handleClose, animal}) {
    const [CageList, setCageList] = useState([]);
    const [currentCage, setCurrentCage] = useState([]);

    useEffect(() => {
        fetch(`https://localhost:7193/api/AnimalCage/animal/${animal.animalId}`,{
            method: "GET",
            headers: {
                "Content-type": "text/plain; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            }
        })
            .then((res) => res.json())
            .then(data => {
                setCurrentCage(data);
            }
            ).catch(rejected => {
                console.log(rejected);
            });
    }, [animal.animalId]);
    return ( 
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cage</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {currentCage.map((cage, index) => {
                        return (
                            <div key={index}>
                                <p>Cage Area: {cage.area.areaId}</p> 
                                <p>Cage ID: {cage.area.areaName}{cage.cageId}</p>
                                <p>Animal Name: {animal.animalName}</p>
                                <hr />
                            </div>
                        )
                    })}
                    
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