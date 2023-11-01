import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function DeleteNewsModal({show, handleClose, handleDelete, news }) {
    return ( 
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to delete <span className="text-danger">{news.title}</span> ?
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

export default DeleteNewsModal;