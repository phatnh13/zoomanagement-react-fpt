import React, {useState, useEffect} from "react";
import {Button, Form} from "react-bootstrap";
import DeleteFoodModal from "./Modal/DeleteFoodModal";

const TrainerTableContent = ({food, reloadState}) => {
    //#region Modal
        //Delete Modal
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);
    //#endregion
    const [foodId, setFoodId] = useState(food.foodId);
    const [localFoodName, setLocalFoodName] = useState(food.foodName);
    useEffect(() => {
        setFoodId(food.foodId);
        setLocalFoodName(food.foodName);
    }, [food.foodId, food.foodName]);
    let handleUpdate = () => {
        fetch(`https://localhost:7193/api/Food`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
            body: JSON.stringify({
                foodId: foodId,
                foodName: localFoodName
            })
        })
            .then((res) => {
                if (res.ok) {
                    alert("Update food successfully");
                    reloadState.setReload(!reloadState.reload);
                } else {
                    alert("Update food failed");
                }
            }).catch(rejected => {
                console.log(rejected);
            });
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
                reloadState.setReload(!reloadState.reload);
            }).catch(rejected => {
                console.log(rejected);
            });
        handleCloseDeleteModal();
    }
    return (
        <tr>
            <td>{food.foodId}</td>
            <td>
                <Form.Control
                type="text"
                value={localFoodName}
                onChange={(e) => {setLocalFoodName(e.target.value)}}/>
            </td>
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