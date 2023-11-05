import React from "react";
import { Modal, Button, Image } from "react-bootstrap";
function DeleteTicketModal({show, handleClose, reloadState, ticket}) {
    let handleDelete = () => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/ticket/${ticket.ticketId}`,{
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token,
            },
        })
            .then((res) => {
                if (res.ok) {
                    reloadState.setReload(!reloadState.reload);
                    handleClose();
                } else {
                    alert("Delete failed");
                }
            }).catch(rejected => {
                console.log(rejected);
            });
    }
    return ( 
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure to delete this ticket?</p>
                <p><strong>Ticket ID:</strong> {ticket.ticketId}</p>
                <p><strong>Ticket name:</strong> {ticket.ticketName}</p>
                <p><strong>Price:</strong> {ticket.price}$</p>
                <Image src={ticket.image} alt="ticket" width="200rem" height="200rem" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
     )
}

export default DeleteTicketModal;