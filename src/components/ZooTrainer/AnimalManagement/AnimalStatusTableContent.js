import React, {useState} from "react";
import {Button} from "react-bootstrap";
import { DateHelper } from "../../DateHelper";
import UpdateAnimalStatusModal from "./UpdateAnimalStatusModal";

const AnimalStatusTableContent = ({animal, reloadState}) => {
    //#region Modal
        //Update Modal
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const handleCloseUpdateModal = () => setShowUpdateModal(false);
    const handleShowUpdateModal = () => setShowUpdateModal(true);
    //#endregion

    const [updatedStatus, setUpdatedStatus] = useState(animal.status);
    
    return (
        <tr>
            <td>{animal.animalId}</td>
            <td>{animal.animalName}</td>
            <td>{DateHelper.formatDate(animal.dateArrive)}</td>
            <td>{animal.status}</td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm" onClick={handleShowUpdateModal}>Update</Button>
            </td>
            <UpdateAnimalStatusModal 
            show={showUpdateModal} 
            handleClose={handleCloseUpdateModal} 
            reloadState={reloadState} 
            updatedStatus={updatedStatus}
            setUpdatedStatus={setUpdatedStatus}
            animal={animal} />
        </tr>
    )
}
export default AnimalStatusTableContent;