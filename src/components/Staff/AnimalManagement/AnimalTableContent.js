import React, {useState} from "react";
import {Button} from "react-bootstrap";
import { DateHelper } from "../../DateHelper";
import DeleteAnimalModal from "./DeleteAnimalModal";
import AnimalShowZooTrainerModal from "./AnimalShowZooTrainerModal";
import AnimalShowCageModal from "./AnimalShowCageModal";

const TrainerTableContent = ({animal, reloadState}) => {
    //#region Modal
        //Delete Modal
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);
        //Show Animal Modal
    const [showTrainerModal, setShowTrainerModal] = useState(false);
    const handleCloseTrainerModal = () => setShowTrainerModal(false);
    const handleShowTrainerModal = () => setShowTrainerModal(true);
        //Show cage Modal
    const [showCageModal, setShowCageModal] = useState(false);
    const handleCloseCageModal = () => setShowCageModal(false);
    const handleShowCageModal = () => setShowCageModal(true);
    //#endregion

    let handleUpdate = () => {
        console.log({animal});
    }

    let handleDelete = () => {
        fetch(`https://localhost:7193/api/Animal/${animal.animalId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("token"))
            },
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
            }).catch(rejected => {
                console.log(rejected);
            });
        handleCloseDeleteModal();
        window.location.reload(false);
    }
 

    return (
        <tr>
            <td>{animal.animalId}</td>
            <td>{animal.species.speciesName}</td>
            <td>{animal.animalName}</td>
            <td>{DateHelper.formatDate(animal.dateArrive)}</td>
            <td>{animal.status}</td>
            <td className="text-center">
                <Button variant="outline-danger" size="sm" onClick={handleShowCageModal} >Cages</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-danger" size="sm" onClick={handleShowTrainerModal} >Zoo Trainers</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm" onClick={handleUpdate}>Update</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm" onClick={handleShowDeleteModal}>Delete</Button>
            </td>
            <AnimalShowCageModal
            show={showCageModal}
            handleClose={handleCloseCageModal}
            animal={animal}
            />
            <AnimalShowZooTrainerModal 
            show={showTrainerModal} 
            handleClose={handleCloseTrainerModal} 
            animal={animal}
            reloadState={reloadState}
            />
            <DeleteAnimalModal 
            show={showDeleteModal} 
            handleClose={handleCloseDeleteModal} 
            handleDelete={handleDelete} 
            animal={animal} 
            />
        </tr>
    )
}
export default TrainerTableContent;