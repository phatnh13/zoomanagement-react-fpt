import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
function MealManaging() {
    const {animalId} = useParams();
    const userId = JSON.parse(localStorage.getItem("loginUser")).userId;
    const [userAnimalRelationship, setUserAnimalRelationship] = useState({});

    const [searchBy, setSearchBy] = useState("AnimalName");
    const [searchString, setSearchString] = useState("");
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch(`https://localhost:7193/api/AnimalUser/animal-trainer-relationship?animalId=${animalId}&userId=${userId}`,{
            method: "GET",
            headers: {
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setUserAnimalRelationship(data);
            }).catch(rejected => {
                console.log(rejected);
            });
        fetch(`https://localhost:7193/api/Meal/${userAnimalRelationship.animalUserId}`)
    }, []);
    return ( 
        <Container fluid>
            <Row className="vh-20 d-flex justify-content-center align-items-center m-3 pb-1 border-bottom">
            {/*Start search*/}
                {/*Search filter */}
                <Col lg={3} md={3} xs={12}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Select
                            value={searchBy}
                            onChange={(e) => {
                                setSearchBy(e.target.value)
                            }}
                        >
                            <option value={"FullName"}>Animal Name</option>
                            <option>Name</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                {/*Search filter */}
                {/*Search bar */}
                <Col lg={8} md={8} xs={11}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={searchString}
                            onChange={(e) => { setSearchString(e.target.value) }}>
                        </Form.Control>
                    </Form.Group>
                </Col>
                {/*Search bar */}
            {/*End search*/}
            </Row>
            <Row>
                <Col>
                    {/*Start Table*/}
                    
                    {/*Start Table*/}
                </Col>
            </Row>
        </Container>
     )
}

export default MealManaging;