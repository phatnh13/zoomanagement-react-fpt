import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AddSpecies() {
    const [speciesName, setSpeciesName] = useState("");
    const [family, setFamily] = useState("");
    const [information, setInformation] = useState("");
    const [characteristic, setCharacteristic] = useState("");
    const [allocation, setAllocation] = useState("");
    const [ecological, setEcological] = useState("");
    const [reproduction, setReproduction] = useState("");
    const [diet, setDiet] = useState("");
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    let [message, setMessage] = useState("");
    let [dirty, setDirty] = useState({
        speciesName: false,
        family: false,
        information: false,
        characteristic: false,
        allocation: false,
        ecological: false,
        reproduction: false,
        diet: false,
    });
    let [errors, setErrors] = useState(
        {
            speciesName: [],
            family: [],
            information: [],
            characteristic: [],
            allocation: [],
            ecological: [],
            reproduction: [],
            diet: [],
        });
    //Validation
    let validate = () => {
        let errorsData = {};
        //speciesName
        errorsData.speciesName = [];
        if (speciesName === "") {
            errorsData.speciesName.push("Species name is required");
        }
        //family
        errorsData.family = [];
        if (family === "") {
            errorsData.family.push("Family box is required");
        }
        //information
        errorsData.information = [];
        if (information === "") {
            errorsData.information.push("Information is required");
        }
        //characteristic
        errorsData.characteristic = [];
        if (characteristic === "") {
            errorsData.characteristic.push("Characteristic box is required");
        }
        //allocation
        errorsData.allocation = [];
        if (allocation === "") {
            errorsData.allocation.push("Allocation box is required");
        }
        //ecological
        errorsData.ecological = [];
        if (ecological === "") {
            errorsData.ecological.push("Ecological box is required");
        }
        //reproduction
        errorsData.reproduction = [];
        if (reproduction === "") {
            errorsData.reproduction.push("Reproduction box is required");
        }
        //diet
        errorsData.diet = [];
        if (diet === "") {
            errorsData.diet.push("Diet box is required");
        }
        setErrors(errorsData);
    }
    //Check valid before submit
    let isValid = () => {
        let valid = true;
        for (let control in errors) {
            if (errors[control].length > 0) {
                valid = false;
            }
        }
        return valid;
    }
    // Species Add event
    let onAddClick = () => {
        // Set all input dirty=true
        let dirtyData = dirty;
        Object.keys(dirty).forEach((control) => {
            dirtyData[control] = true;
        });
        setDirty(dirtyData);

        //Validate all input
        validate();
        let formData = new FormData();

        formData.append("SpeciesName", speciesName);
        formData.append("Family", family);
        formData.append("Information", information);
        formData.append("Characteristic", characteristic);
        formData.append("Allocation", allocation);
        formData.append("Ecological", ecological);
        formData.append("Diet", diet);
        formData.append("BreedingAndReproduction", reproduction);
        formData.append("ImageFile", image);
        formData.append("IsDeleted", false);

        //Send response to server if valid
        if (isValid()) {
            fetch("https://vietnamzoo.azurewebsites.net/api/Species",
                {
                    method: "POST",
                    headers: {
                        "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
                    },
                    body: formData

                }).then((res) => {
                    if (res.ok) {
                        setMessage(<span className="text-success">Add successfully</span>);
                        setTimeout(() => {
                            navigate("/admin/species");
                        }, 1000);
                    } else {
                        console.log("Add failed");
                        console.log(res);
                        setMessage(<span className="text-danger">Add failed</span>);
                    }
                }).catch(rejected => {
                    console.log(rejected);
                });
        }
    }

    let handleCancel = () => {
        navigate("/admin/species");
    }
    useEffect(validate, [speciesName, family, information, characteristic, allocation, ecological, reproduction, diet]);
    return (
        <Container fluid>
            <Row className="py-5 d-flex justify-content-center align-items-center">
                <Col md={8} lg={10} xs={12}>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-1">
                                <div className="mb-3">
                                    <Form  >
                                        <Form.Group
                                            className="mb-3"
                                            controlId="speciesAddName">
                                            <Form.Label>Species Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={speciesName}
                                                onChange={(e) => {
                                                    setSpeciesName(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter species name" />
                                            <div className="text-danger">
                                                {dirty["speciesName"] && errors["speciesName"][0] ?
                                                    errors["speciesName"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="speciesAddFamily">
                                            <Form.Label>Family</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={family}
                                                onChange={(e) => {
                                                    setFamily(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter its family" />
                                            <div className="text-danger">
                                                {dirty["family"] && errors["family"][0] ?
                                                    errors["family"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="speciesAddinfo">
                                            <Form.Label>Information</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                row={8}
                                                value={information}
                                                onChange={(e) => {
                                                    setInformation(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter information" />
                                            <div className="text-danger">
                                                {dirty["information"] && errors["information"][0] ?
                                                    errors["information"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="speciesAddCharacteristic">
                                            <Form.Label>Characteristic</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                row={7}
                                                value={characteristic}
                                                onChange={(e) => {
                                                    setCharacteristic(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter its characteristic" />
                                            <div className="text-danger">
                                                {dirty["characteristic"] && errors["characteristic"][0] ?
                                                    errors["characteristic"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="speciesAddAllocation">
                                            <Form.Label>Allocation</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                row={5}
                                                value={allocation}
                                                onChange={(e) => {
                                                    setAllocation(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter its allocation" />
                                            <div className="text-danger">
                                                {dirty["allocation"] && errors["allocation"][0] ?
                                                    errors["allocation"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="speciesAddEcological">
                                            <Form.Label>Ecological</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                row={5}
                                                value={ecological}
                                                onChange={(e) => {
                                                    setEcological(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter its ecological" />
                                            <div className="text-danger">
                                                {dirty["ecological"] && errors["ecological"][0] ?
                                                    errors["ecological"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="speciesAddDiet">
                                            <Form.Label>Diet</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                row={4}
                                                value={diet}
                                                onChange={(e) => {
                                                    setDiet(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter its diet" />
                                            <div className="text-danger">
                                                {dirty["diet"] && errors["diet"][0] ?
                                                    errors["diet"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="speciesAddReproduction">
                                            <Form.Label>Reproduction</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                row={4}
                                                value={reproduction}
                                                onChange={(e) => {
                                                    setReproduction(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter its reproduction info" />
                                            <div className="text-danger">
                                                {dirty["reproduction"] && errors["reproduction"][0] ?
                                                    errors["reproduction"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="speciesAddReproduction">
                                            <Form.Label>Image</Form.Label>
                                            <Form.Control
                                                type="file"
                                                onChange={(e) => {
                                                    setImage(e.target.files[0]);
                                                }}
                                            />
                                        </Form.Group>

                                        <Row>
                                            <Col lg={6} md={6} sm={0}>
                                            </Col>
                                            <Col lg={6} md={6} sm={12} className="d-flex justify-content-end">
                                                <Button size="sm" variant="secondary" className="mx-2" onClick={handleCancel}>
                                                    Cancel
                                                </Button>
                                                <Button size="sm" variant="primary" onClick={onAddClick} >
                                                    Add
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Row>{message}</Row>
                                    </Form>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AddSpecies;