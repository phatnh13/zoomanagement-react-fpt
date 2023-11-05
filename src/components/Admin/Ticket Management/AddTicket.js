import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DateHelper } from "../../DateHelper";
function AddTicket() {
    const [ticketName, setTicketName] = useState("");
    const [price, setPrice] = useState(0);
    const [releaseDate, setReleaseDate] = useState(DateHelper.formatDateForInput(new Date()));
    const [image, setImage] = useState(null);

    const navigate = useNavigate();

    let [dirty, setDirty] = useState({
        ticketName: false,
        price: false,
        releaseDate: false,
    });
    let [errors, setErrors] = useState(
        {
            ticketName: [],
            price: [],
            releaseDate: [],
        });
    let validate = () => {
        let errorsData = {};
        errorsData.ticketName = [];
        if (ticketName === "") {
            errorsData.ticketName.push("Ticket name is required");
        }
        errorsData.price = [];
        if (price <= 0) {
            errorsData.price.push("Price must be greater than 0");
        }
        errorsData.releaseDate = [];
        if (releaseDate < DateHelper.getToday()) {
            errorsData.releaseDate.push("Release date must be today or later");
        }
        setErrors(errorsData);
    }

    let isValid = () => {
        let valid = true;
        for (let control in errors) {
            if (errors[control].length > 0) {
                valid = false;
            }
        }
        return valid;
    }

    let handleAddTicket = () => {
        // Set all input dirty=true
        let dirtyData = dirty;
        Object.keys(dirty).forEach((control) => {
            dirtyData[control] = true;
        });
        setDirty(dirtyData);

        //Validate all input
        validate();
        let formData = new FormData();
        formData.append("TicketName", ticketName);
        formData.append("Price", price);
        formData.append("ReleaseDate", releaseDate);
        formData.append("Image", image);

        if (isValid()) {
            fetch(`https://vietnamzoo.azurewebsites.net/api/Ticket`, {
                method: "POST",
                headers: {
                    "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
                },
                body: formData
            })
                .then((res) => {
                    if (res.ok) {
                        navigate("/admin/ticket");
                    } else {
                        alert("Added fail!");
                    }
                }).catch((rejected) => {
                    console.log(rejected);
                });
        }
    }

    let handleCancel = () => {
        navigate("/admin/ticket");
    }

    useEffect(validate, [ticketName, price, releaseDate]);

    return (
        <Container className="mt-3 col-6">
            <Card>
                <Card.Body>
                    <Card.Title as="h4">Add Ticket</Card.Title>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Ticket Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={ticketName}
                                onChange={(e) => setTicketName(e.target.value)}
                                placeholder="Enter ticket name" />
                            <div className="text-danger">
                                {dirty["ticketName"] && errors["ticketName"][0] ?
                                    errors["ticketName"][0] : ""}
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter price" />
                            <div className="text-danger">
                                {dirty["price"] && errors["price"][0] ?
                                    errors["price"][0] : ""}
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Release Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={releaseDate}
                                onChange={(e) => setReleaseDate(e.target.value)} />
                            <div className="text-danger">
                                {dirty["releaseDate"] && errors["releaseDate"][0] ?
                                    errors["releaseDate"][0] : ""}
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={(e) => {
                                    setImage(e.target.files[0]);
                                }}
                            />
                        </Form.Group>
                    </Form>
                    <Row>
                        <Col>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="d-flex justify-content-end">
                            <Button size="md" variant="secondary" className="mx-2" onClick={handleCancel}>
                                Cancel
                            </Button>
                            <Button size="md" variant="primary" onClick={handleAddTicket}>
                                Add Ticket
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default AddTicket;