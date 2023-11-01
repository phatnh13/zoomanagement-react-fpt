import React, {useState} from "react";
import {Button} from "react-bootstrap";
import DeleteFoodModal from "./Modal/DeleteFoodModal";

const TrainerTableContent = ({food, reloadState}) => {
    //#region Modal
        //Delete Modal
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);
    //#endregion


    let handleUpdate = () => {
        console.log({food});
    }

    let handleDelete = () => {
        fetch(`https://localhost:7193/api/Food/${food.foodId}`, {
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
            <td>{food.foodId}</td>
            <td>{food.foodName}</td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm" onClick={handleUpdate}>Update</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm" onClick={handleShowDeleteModal}>Delete</Button>
            </td>
            <DeleteFoodModal 
            show={showDeleteModal} 
            handleClose={handleCloseDeleteModal} 
            handleDelete={handleDelete} 
            food={food} 
            />
        </tr>
    )
}
export default TrainerTableContent;