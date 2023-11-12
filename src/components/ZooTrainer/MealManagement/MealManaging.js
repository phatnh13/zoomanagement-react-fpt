import React, { useState, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { DateHelper } from "../../DateHelper";
import MealTable from "./MealTable";
import { Spin } from "antd";
function MealManaging() {
    //Get animalId from url
    const { animalId } = useParams();
    //Get animal object
    const [animal, setAnimal] = useState({});

    const userId = JSON.parse(localStorage.getItem("loginUser")).userId;
    const [animalUserId, setAnimalUserId] = useState(0);

    //Dummy state to force re-render
    const [reload, setReload] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [time, setTime] = useState(DateHelper.getNowTime());

    const navigate = useNavigate();
    let handleAddMeal = () => {
        navigate("/trainer/meals/add", {state: {animalUserId: animalUserId, animal: animal}});
    }

    useLayoutEffect(() => {
            //get animal attributes
        fetch(`https://vietnamzoo.azurewebsites.net/api/Animal/${animalId}`, {
            method: "GET",
            headers: {
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setAnimal(data);
            }).catch(rejected => {
                console.log(rejected);
            });
        //Get user animal relationship
        fetch(`https://vietnamzoo.azurewebsites.net/api/AnimalUser/animal-trainer-relationship?animalId=${animalId}&userId=${userId}`, {
            method: "GET",
            headers: {
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setAnimalUserId(data.animalUserId);
                setIsLoading(false);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, [animalId, animalUserId, reload]);
    return (
        <Container fluid>
            {isLoading ? (
                <Spin />
            ) : (
                <>
                    <h2 className="text-center"><span className="text-danger">
                        {animal.animalName}</span>'s meal Management
                    </h2>
                    <Row className="vh-20 d-flex justify-content-center align-items-center m-3 pb-1 border-bottom">
                        <Col lg={4} md={4} xs={12}>
                            <Form.Group className="mb-3" controlId="search">
                                <Form.Control
                                    type="time"
                                    placeholder="Search"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="primary" className="mb-3" onClick={handleAddMeal}>Add Meal</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/*Start Table*/}
                            <MealTable animalUserId={animalUserId} reloadState={{ reload, setReload }} />
                            {/*Start Table*/}
                        </Col>
                    </Row>
                </>
            )}
        </Container>
    )
}

export default MealManaging;