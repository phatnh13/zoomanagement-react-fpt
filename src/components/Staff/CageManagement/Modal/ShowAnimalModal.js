import React, { useEffect, useState } from "react";
import { Modal, Table, Button } from "react-bootstrap";
import ShowAnimalContent from "./ShowAnimalContent";
function ShowAnimalModal({ show, handleClose, reloadState, cage }) {
    const [animalList, setAnimalList] = useState([]);

    useEffect(() => {
        //Set Animal List
        fetch(`https://vietnamzoo.azurewebsites.net/api/AnimalCage/cage/${cage.cageId}`, {
            method: "GET",
            headers: {  
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setAnimalList(data);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, [reloadState.reload, cage]);
    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Animal Id</th>
                            <th>Animal Name</th>
                            <th>Day Arrived</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {animalList.map((animal) => {
                            return <ShowAnimalContent animal={animal} reloadState={reloadState} />;
                        })}
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

export default ShowAnimalModal;