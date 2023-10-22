import React from "react";
import {Button, Modal} from "react-bootstrap";

function SpeciesDeleteModal({show, handleClose, handleDelete, species}) {
    return ( 
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to delete <span className="text-danger">{species.speciesName}</span> ?
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

export default SpeciesDeleteModal;