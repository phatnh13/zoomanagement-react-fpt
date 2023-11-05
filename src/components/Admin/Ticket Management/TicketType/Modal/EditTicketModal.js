import React, { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
function EditTicketModal({ show, handleClose, ticket, reloadState }) {
    const [ticketName, setTicketName] = useState(ticket.ticketName);
    const [price, setPrice] = useState(ticket.price);

    let [dirty, setDirty] = useState({
        ticketName: false,
        price: false,
    });
    let [errors, setErrors] = useState(
        {
            ticketName: [],
            price: [],
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

    let handleEdit = () => {
        // Set all input dirty=true
        let dirtyData = dirty;
        Object.keys(dirty).forEach((control) => {
            dirtyData[control] = true;
        });
        setDirty(dirtyData);

        //Validate all input
        validate();
        if (isValid()) {
            fetch(`https://vietnamzoo.azurewebsites.net/api/ticket/`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token,
                },
                body: JSON.stringify(
                    {
                        "ticketId": ticket.ticketId,
                        "ticketName": ticketName,
                        "price": price,
                    }
                ),
            })
                .then((res) => {
                    if (res.ok) {
                        handleClose();
                        reloadState.setReload(!reloadState.reload);
                    }
                    else {
                        alert("Edit ticket failed!");
                    }
                })
                .catch(rejected => {
                    console.log(rejected);
                });
        }
    }
    let handleCancel = () => {
        setTicketName(ticket.ticketName);
        setPrice(ticket.price);
        handleClose();
    }
    useEffect(validate, [ticketName, price]);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formTicketName">
                        <Form.Label>Ticket name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter ticket name"
                            value={ticketName}
                            onChange={(e) => setTicketName(e.target.value)} />
                    </Form.Group>
                    <div className="text-danger">
                        {dirty["ticketName"] && errors["ticketName"][0] ?
                            errors["ticketName"][0] : ""}
                    </div>
                    <Form.Group className="mb-3" controlId="formPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />
                    </Form.Group>
                    <div className="text-danger">
                        {dirty["price"] && errors["price"][0] ?
                            errors["price"][0] : ""}
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleEdit}>
                    Edit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditTicketModal;