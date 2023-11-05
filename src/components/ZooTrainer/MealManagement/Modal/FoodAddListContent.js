import React from "react";
import { Button } from "react-bootstrap";
function FoodAddListContent({food, foodAddList, setFoodAddList}) {
    let handleDeleteFood = () => {
        const updatedList = foodAddList.filter(e => e.foodId !== food.foodId);
        setFoodAddList(updatedList);
    }
    return ( 
        <tr>
            <td>{food.foodName}</td>
            <td><Button variant="danger" onClick={handleDeleteFood}>Delete</Button></td>
        </tr>
     )
}

export default FoodAddListContent;