import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {Button, Image} from "react-bootstrap";
import TrainerDeleteModal from "./TrainerDeleteModal";
import TrainerShowAnimalModal from "./TrainerShowAnimalModal";
import { DateHelper } from "../../DateHelper";
import Delete from "../../../assets/delete.png";
import Update from "../../../assets/edit.png";
const TrainerTableContent = ({user, reloadState, index}) => {
    //#region Modal
        //Delete Modal
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);
        //Show Animal Modal
    const [showAnimalModal, setShowAnimalModal] = useState(false);
    const handleCloseAnimalModal = () => setShowAnimalModal(false);
    const handleShowAnimalModal = () => setShowAnimalModal(true);
    //#endregion

    //Variables
    const [animalList, setAnimalList] = useState([]); //List of animal of this trainer
    const navigate = useNavigate();

    let handleShowAnimal = () => {
        handleShowAnimalModal();
        fetch(`https://vietnamzoo.azurewebsites.net/api/AnimalUser/user/${user.userId}`, {
            method: "GET",
            headers: {
                "Content-type": "text/plain; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setAnimalList(data);
            }).catch(rejected => {
                console.log(rejected);
            });
    }

    let handleUpdate = () => {
        navigate(`/staff/trainer/update/`, {state: {user: user}});
    }

    let handleDelete = () => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/User/${user.userId}`, {
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
                    alert("Delete trainer failed");
                }
            
            })
            .catch(rejected => {
                console.log(rejected);
            });
        handleCloseDeleteModal();
        navigate("/staff/trainer");
    }
    return (
        <tr>
            <td>{index+1}</td>
            <td className="col-3">{user.fullName}</td>
            <td className="col-1">{user.userName}</td>
            <td>{user.gender}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.email}</td>
            <td>{DateHelper.formatDate(user.dateOfBirth)}</td>
            <td className="text-center">
                <Button variant="outline-success" size="sm" onClick={handleShowAnimal}>Animal</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-warning" size="sm" onClick={handleUpdate}><Image style={{ height: '1rem', width: '1rem' }} src={Update}></Image></Button>
            </td>
            <td className="text-center">
                <Button variant="outline-danger" size="sm" onClick={handleShowDeleteModal}><Image style={{ height: '1rem', width: '1rem' }} src={Delete}></Image></Button>
            </td>
            <TrainerShowAnimalModal show={showAnimalModal} handleClose={handleCloseAnimalModal} animalList={animalList} user={user} />
            <TrainerDeleteModal show={showDeleteModal} handleClose={handleCloseDeleteModal} handleDelete={handleDelete} user={user} />
        </tr>
        // <h5>row</h5>
    )
}
export default TrainerTableContent;