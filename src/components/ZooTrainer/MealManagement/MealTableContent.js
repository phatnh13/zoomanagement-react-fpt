import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import DeleteMealFoodModal from "./Modal/DeleteMealFoodModal";
import DeleteMealModal from "./Modal/DeleteMealModal";
function MealTableContent({ meal, reloadState }) {
    //#region Control Modal
        //Delete Food Meal
    const [showDeleteMealFoodModal, setShowDeleteMealFoodModal] = useState(false);
    const handleShowDeleteMealFoodModal = () => setShowDeleteMealFoodModal(true);
    const handleCloseDeleteMealFoodModal = () => setShowDeleteMealFoodModal(false);
        //Delete Meal
    const [showDeleteMealModal, setShowDeleteMealModal] = useState(false);
    const handleShowDeleteMealModal = () => setShowDeleteMealModal(true);
    const handleCloseDeleteMealModal = () => setShowDeleteMealModal(false);
    //#endregion
    return (
        <tr>
            <td>{meal.note}</td>
            <td>{meal.feedingTime}</td>
            <td>
                <Form.Select className="my-auto">
                    <option>Click to see assigned food</option>
                    {meal.food.map((food, index) => {
                        return <option key={index}>{food.foodName}</option>
                    })}
                </Form.Select>
            </td>
            <td><Button variant="outline-warning" onClick={handleShowDeleteMealFoodModal}>Delete Food</Button></td>
            <td><Button variant="outline-danger" onClick={handleShowDeleteMealModal}>Delete Meal</Button></td>
            <DeleteMealFoodModal 
            show={showDeleteMealFoodModal} 
            handleClose={handleCloseDeleteMealFoodModal}
            reloadState={reloadState}
            meal={meal} />
            <DeleteMealModal 
            show={showDeleteMealModal}
            handleClose={handleCloseDeleteMealModal}
            reloadState={reloadState}
            meal={meal} />
        </tr>
    )
}

export default MealTableContent;