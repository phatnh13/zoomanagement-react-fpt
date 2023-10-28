import React from "react";
import {Button, Modal} from "react-bootstrap";

function StaffDeleteModal({show, handleClose, handleDelete, user}) {
    return ( 
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to delete <span className="text-danger">{user.fullName}</span> ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
     )
}

export default StaffDeleteModal;