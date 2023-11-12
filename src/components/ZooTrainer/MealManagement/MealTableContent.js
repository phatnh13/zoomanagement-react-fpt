import React, {useState} from "react";
import { Button, Image } from "react-bootstrap";
import DeleteMealModal from "./Modal/DeleteMealModal";
import ViewFood from "./Modal/ViewFood";
import Delete from "../../../assets/delete.png";
import View from "../../../assets/view.png";
function MealTableContent({ meal, reloadState }) {
    //#region Control Modal
        //Delete Meal
    const [showDeleteMealModal, setShowDeleteMealModal] = useState(false);
    const handleShowDeleteMealModal = () => setShowDeleteMealModal(true);
    const handleCloseDeleteMealModal = () => setShowDeleteMealModal(false);
        //View Food
    const [showViewFoodModal, setShowViewFoodModal] = useState(false);
    const handleShowViewFoodModal = () => setShowViewFoodModal(true);
    const handleCloseViewFoodModal = () => setShowViewFoodModal(false);
    //#endregion
    return (
        <tr>
            <td>{meal.note}</td>
            <td>{meal.feedingTime}</td>
            <td>
                <Button variant="outline-success" onClick={handleShowViewFoodModal}><Image style={{ height: '1rem', width: '1rem' }} src={View}></Image></Button>
            </td>
            <td><Button variant="outline-danger" onClick={handleShowDeleteMealModal}><Image style={{ height: '1rem', width: '1rem' }} src={Delete}></Image></Button></td>
            <DeleteMealModal 
            show={showDeleteMealModal}
            handleClose={handleCloseDeleteMealModal}
            reloadState={reloadState}
            meal={meal} />
            <ViewFood 
            show={showViewFoodModal}
            handleClose={handleCloseViewFoodModal}
            reloadState={reloadState}
            meal={meal} />
        </tr>
    )
}

export default MealTableContent;