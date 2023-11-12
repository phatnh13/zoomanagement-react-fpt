import React, {useState} from "react";
import {Button, Image} from "react-bootstrap";
import { DateHelper } from "../../DateHelper";
import DeleteAnimalModal from "./Modal/DeleteAnimalModal";
import AnimalShowZooTrainerModal from "./Modal/AnimalShowZooTrainerModal";
import AnimalShowCageModal from "./Modal/AnimalShowCageModal";
import AnimalUpdateModal from "./Modal/AnimalUpdateModal";
import Delete from "../../../assets/delete.png";
import Update from "../../../assets/edit.png";

const TrainerTableContent = ({animal, reloadState}) => {
    //#region Modal
        //Delete Modal
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);
        //Update Modal
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const handleCloseUpdateModal = () => setShowUpdateModal(false);
    const handleShowUpdateModal = () => setShowUpdateModal(true);
        //Show Animal Modal
    const [showTrainerModal, setShowTrainerModal] = useState(false);
    const handleCloseTrainerModal = () => setShowTrainerModal(false);
    const handleShowTrainerModal = () => setShowTrainerModal(true);
        //Show cage Modal
    const [showCageModal, setShowCageModal] = useState(false);
    const handleCloseCageModal = () => setShowCageModal(false);
    const handleShowCageModal = () => setShowCageModal(true);
    //#endregion

    const [CageList, setCageList] = useState([]);
    const [currentCage, setCurrentCage] = useState({});

    

    let handleShowCage = () => {
        handleShowCageModal();
        fetch(`https://vietnamzoo.azurewebsites.net/api/AnimalCage/present/${animal.animalId}`, {
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
        fetch(`https://vietnamzoo.azurewebsites.net/api/AnimalCage/animal/${animal.animalId}`, {
            method: "GET",
            headers: {
                "Content-type": "text/plain; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            }
        })
            .then((res) => res.json())
            .then(data => {
                setCageList(data);
            }
            ).catch(rejected => {
                console.log(rejected);
            });
    }

    let handleDelete = () => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/Animal/${animal.animalId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                alert("Delete successfully");
                reloadState.setReload(!reloadState.reload);
            }).catch(rejected => {
                console.log(rejected);
            });
        handleCloseDeleteModal();
    }
 

    return (
        <tr>
            <td>{animal.animalId}</td>
            <td>{animal.species.speciesName}</td>
            <td>{animal.animalName}</td>
            <td>{DateHelper.formatDate(animal.dateArrive)}</td>
            <td>{animal.status}</td>
            <td className="text-center">
                <Button variant="outline-success" size="sm" onClick={handleShowCage} >Cages</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-success" size="sm" onClick={handleShowTrainerModal} >Zoo Trainers</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-warning" size="sm" onClick={handleShowUpdateModal}><Image style={{ height: '1rem', width: '1rem' }} src={Update}></Image></Button>
            </td>
            <td className="text-center">
                <Button variant="outline-danger" size="sm" onClick={handleShowDeleteModal}><Image style={{ height: '1rem', width: '1rem' }} src={Delete}></Image></Button>
            </td>
            <AnimalShowCageModal
            show={showCageModal}
            handleClose={handleCloseCageModal}
            animal={animal}
            CageList={CageList}
            currentCage={currentCage}
            />
            <AnimalShowZooTrainerModal 
            show={showTrainerModal} 
            handleClose={handleCloseTrainerModal} 
            animal={animal}
            reloadState={reloadState}
            />
            <AnimalUpdateModal
            show={showUpdateModal}
            handleClose={handleCloseUpdateModal}
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