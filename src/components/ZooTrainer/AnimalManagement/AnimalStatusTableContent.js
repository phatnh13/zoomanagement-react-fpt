import React, {useState} from "react";
import {Button, Image} from "react-bootstrap";
import { DateHelper } from "../../DateHelper";
import UpdateAnimalStatusModal from "./UpdateAnimalStatusModal";
import { useNavigate } from "react-router-dom";
import Update from "../../../assets/edit.png";
const AnimalStatusTableContent = ({animal, reloadState}) => {
    //#region Modal
        //Update Modal
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const handleCloseUpdateModal = () => setShowUpdateModal(false);
    const handleShowUpdateModal = () => setShowUpdateModal(true);
    //#endregion

    const [updatedStatus, setUpdatedStatus] = useState(animal.status);
    
    const navigate = useNavigate();
    let handleShowMeal = () => {
        navigate(`/trainer/meals/${animal.animalId}`)
    }
    
    return (
        <tr>
            <td>{animal.animalId}</td>
            <td>{animal.animalName}</td>
            <td>{DateHelper.formatDate(animal.dateArrive)}</td>
            <td>{animal.status}</td>
            <td className="text-center">
                <Button variant="outline-primary" size="" onClick={handleShowMeal}>Meals</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-warning" size="" onClick={handleShowUpdateModal}><Image style={{ height: '1rem', width: '1rem' }} src={Update}></Image></Button>
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