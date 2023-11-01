import React, { useState } from "react";
import { Button } from "react-bootstrap";
import MoveAnimalModal from "./MoveAnimalModal";
import { DateHelper } from "../../../DateHelper";

function ShowAnimalContent({ animal, reloadState }) {
    const [showMove, setMoveShow] = useState(false);
    const handleMoveClose = () => setMoveShow(false);
    const handleMoveShow = () => setMoveShow(true);
    return (
        <tr>
            <td>{animal.animalId}</td>
            <td>{animal.animalName}</td>
            <td>{DateHelper.formatDate(animal.dateArrive)}</td>
            <td><Button variant="warning" onClick={handleMoveShow}>Move</Button></td>
            <MoveAnimalModal 
            show={showMove} 
            handleClose={handleMoveClose} 
            animal={animal} 
            reloadState={reloadState} />
        </tr>
    )
}

export default ShowAnimalContent;