import React, {useState, useEffect} from "react";
import { Container, Row, Col, Form, Pagination, Card, Button } from "react-bootstrap";
import TrainerTableSmall from "./TrainerTableSmall";
import { useNavigate } from "react-router-dom";
function AddAnimal() {
    const [trainer, setTrainer] = useState([]);
    const [searchBy, setSearchBy] = useState("FullName");
    const [searchString, setSearchString] = useState("");
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const [speciesList, setSpeciesList] = useState([]);
    const [areaList, setAreaList] = useState([]);
    const [cageList, setCageList] = useState([]);

    //Adding animal attributes
    const [speciesId, setSpeciesId] = useState();
    const [animalName, setAnimalName] = useState();
    const [dateArrive, setDateArrive] = useState();
    const [status, setStatus] = useState();
    const [trainerId, setTrainerId] = useState();
    const [selectedArea, setSelectedArea] = useState(0);
    const [selectedCage, setSelectedCage] = useState(0);

    //#region Pagination
    let PaginationLoad = () => {
        let items = [];
        if (totalPages > 1) {
            for (let page = 1; page <= totalPages; page++) {
                items.push(<Pagination.Item key={page} onClick={onPaginationClick}>{page}</Pagination.Item>)
            }
        }
        return items;
    }

    const onPaginationClick = (e) => {
        setCurrentPage(e.target.text);
    }
    //#endregion
    const navigate = useNavigate();
    let handleCancel = () => {
        navigate("/staff/animal");
    }
    let handleAddAnimal = () => {
        console.log(speciesId);
        fetch(`https://vietnamzoo.azurewebsites.net/api/Animal`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
            body: JSON.stringify({
                speciesId: speciesId,
                animalName: animalName,
                dateArrive: dateArrive,
                status: status,
                userId: trainerId,
                cageId: selectedCage
            })
        })  .then((res) => {
                if (res.ok) {
                    alert("Add animal successfully!");
                    navigate("/staff/animal");
                }
                else {
                    alert("Add animal failed!");
                }
            })
            .catch(rejected => {
                console.log(rejected);
            });
    }
    useEffect(() => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/ZooTrainer?pageNumber=${currentPage}&searchBy=${searchBy}&searchString=${searchString}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setTrainer(data.pagingList);
                setTotalPages(data.totalPages);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, [currentPage, searchBy, searchString]);
    useEffect(() => {
        //Set AreaList
        fetch(`https://vietnamzoo.azurewebsites.net/api/Areas`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
                }
            })
                .then((res) => res.json())
                .then(data => {
                    setAreaList(data);
                }).catch(rejected => {
                    console.log(rejected);
                });
        //Set CageList
        fetch(`https://vietnamzoo.azurewebsites.net/api/Cage/area/${selectedArea}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
                }
            })
                .then((res) => res.json())
                .then(data => {
                    setCageList(data);
                }).catch(rejected => {
                    console.log(rejected);
                });   
    }, [selectedArea]);
    useEffect(() => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/Species/GetAllSpecies`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setSpeciesList(data);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, []);
    return (
        <Container fluid className="mt-2">
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <Card.Title>Add Animal</Card.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Species Name</Form.Label>
                                        <Form.Select value={speciesId} onChange={(e) => {setSpeciesId(e.target.value)}}>
                                            <option>Choose Species</option>
                                            {speciesList.map((species, index) => {
                                                return <option key={index} value={species.speciesId}>{species.speciesName}</option>
                                            })}
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Animal Name</Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        placeholder="Enter animal name"
                                        value={animalName}
                                        onChange={(e) => {setAnimalName(e.target.value)}}
                                         />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Date Arrive</Form.Label>
                                        <Form.Control 
                                        type="date" 
                                        value={dateArrive}
                                        onChange={(e) => {setDateArrive(e.target.value)}}
                                         />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        placeholder="Enter animal status"
                                        value={status}
                                        onChange={(e) => {setStatus(e.target.value)}}
                                         />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Trainer ID</Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        value={trainerId}
                                        onChange={(e) => {setTrainerId(e.target.value)}}
                                        placeholder="Enter trainer ID"
                                         />
                                    </Form.Group>
                                    <Form.Label>Cage ID</Form.Label>
                                    <Row>
                                        <Col lg={4} md={4} sm={12}>
                                            <Form.Select value={selectedArea} onChange={(e) => {setSelectedArea(e.target.value);}}>
                                                <option>Choose Area</option>
                                                {areaList.map((area, index) => {
                                                    return <option key={index} value={area.areaId}>{area.areaName}</option>
                                                })}
                                            </Form.Select>
                                        </Col>
                                        <Col>
                                            <Form.Select value={selectedCage} onChange={(e) => {setSelectedCage(e.target.value)}}>
                                                <option>Choose Cage</option>
                                                {cageList.map((cage, index) => {
                                                    return <option key={index} value={cage.cageId}>{cage.cageName}</option>
                                                })}
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </Form>
                                    <Button variant="light" onClick={handleCancel} className="mt-2">Cancel</Button>
                                    <Button variant="primary" onClick={handleAddAnimal} className="mt-2">Add</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={12} sm={12}>
                    {/*Search row*/}
                    <Row className="d-flex justify-content-center align-items-center m-3 pb-1 border-bottom">
                        <Col>
                            <Form.Group className="mb-3" controlId="search">
                                <Form.Select
                                    value={searchBy}
                                    onChange={(e) => {
                                        setSearchBy(e.target.value)
                                    }}
                                >
                                    <option value={"FullName"}>Full Name</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        {/*Search filter */}
                        {/*Search bar */}
                        <Col lg={7} md={12} xs={12}>
                            <Form.Group className="mb-3" controlId="search">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    value={searchString}
                                    onChange={(e) => { setSearchString(e.target.value) }}>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <TrainerTableSmall trainerList={trainer} setTrainerId={setTrainerId} />
                    <Pagination size="md" className="d-flex justify-content-center">
                        {PaginationLoad()}
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
}

export default AddAnimal;