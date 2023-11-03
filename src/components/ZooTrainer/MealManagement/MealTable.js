import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import MealTableContent from "./MealTableContent";
function MealTable({animalUserId, reloadState}) {
    const [meals, setMeals] = useState([]);
    const callMealsList = () => {
        fetch(`https://localhost:7193/api/Meal/${animalUserId}`, {
            method: "GET",
            headers: {
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setMeals(data);
            }).catch(rejected => {
                console.log(rejected);
            });
    }
    useEffect(() => {
        callMealsList();
    }, [])
    return ( 
        <Container fluid>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="col-4">Note</th>
                        <th className="col-1">Time</th>
                        <th className="col-3">Food</th>
                        <th className="col-2"></th>
                        <th className="col-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {meals.map((meal, index) => {
                        return <MealTableContent key={index} meal={meal} reloadState={reloadState}/>
                    })}
                </tbody>
            </Table>
        </Container>
     )
}

export default MealTable;