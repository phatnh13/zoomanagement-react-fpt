import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function DeleteAreaModal({show, handleClose, handleDelete, area }) {
    return ( 
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to delete area <span className="text-danger">{area.areaName}</span> ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
     )
}

export default DeleteAreaModal;