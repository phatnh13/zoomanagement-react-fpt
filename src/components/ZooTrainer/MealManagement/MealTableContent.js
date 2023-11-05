import React, {useState} from "react";
import { Button } from "react-bootstrap";
import DeleteMealModal from "./Modal/DeleteMealModal";
import ViewFood from "./Modal/ViewFood";
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
                <Button variant="outline-info" onClick={handleShowViewFoodModal}>View Food</Button>
            </td>
            <td><Button variant="outline-danger" onClick={handleShowDeleteMealModal}>Delete Meal</Button></td>
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