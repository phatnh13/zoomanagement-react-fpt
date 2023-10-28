import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";
import TrainerDeleteModal from "./TrainerDeleteModal";
import TrainerShowAnimalModal from "./TrainerShowAnimalModal";
import { DateHelper } from "../../DateHelper";

const TrainerTableContent = ({user}) => {
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
        fetch(`https://localhost:7193/api/AnimalUser/user/${user.userId}`, {
            method: "GET",
            headers: {
                "Content-type": "text/plain; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("token"))
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
        navigate(`/staff/trainer/update/`, {state: {id: user.userId}});
    }

    let handleDelete = () => {
        fetch(`https://localhost:7193/api/User/${user.userId}`, {
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
        navigate("/staff/trainer");
    }
    return (
        <tr>
            <td>{user.userId}</td>
            <td>{user.userName}</td>
            <td>{user.fullName}</td>
            <td>{user.gender}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.email}</td>
            <td>{DateHelper.formatDate(user.dateOfBirth)}</td>
            <td className="text-center">
                <Button variant="outline-danger" size="sm" onClick={handleShowAnimal}>Animal</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm" onClick={handleUpdate}>Update</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm" onClick={handleShowDeleteModal}>Delete</Button>
            </td>
            <TrainerShowAnimalModal show={showAnimalModal} handleClose={handleCloseAnimalModal} animalList={animalList} user={user} />
            <TrainerDeleteModal show={showDeleteModal} handleClose={handleCloseDeleteModal} handleDelete={handleDelete} user={user} />
        </tr>
        // <h5>row</h5>
    )
}
export default TrainerTableContent;