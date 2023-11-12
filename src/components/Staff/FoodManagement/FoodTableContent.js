import React, {useState, useEffect} from "react";
import {Button, Form, Image} from "react-bootstrap";
import DeleteFoodModal from "./Modal/DeleteFoodModal";
import Delete from "../../../assets/delete.png";
import Update from "../../../assets/edit.png";

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
        fetch(`https://vietnamzoo.azurewebsites.net/api/Food`, {
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
        fetch(`https://vietnamzoo.azurewebsites.net/api/Food/${food.foodId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => {
                if (res.ok) {
                    alert("Delete food successfully");
                    reloadState.setReload(!reloadState.reload);
                } else {
                    alert("Delete food failed");
                }
            })
            .catch(rejected => {
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
                <Button variant="outline-warning" size="sm" onClick={handleUpdate}><Image style={{ height: '1rem', width: '1rem' }} src={Update}></Image></Button>
            </td>
            <td className="text-center">
                <Button variant="outline-danger" size="sm" onClick={handleShowDeleteModal}><Image style={{ height: '1rem', width: '1rem' }} src={Delete}></Image></Button>
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