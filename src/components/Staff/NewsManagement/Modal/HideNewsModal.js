import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function HideNewsModal({show, handleClose, handleHide, news }) {
    return ( 
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Hide News</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to hide <span className="text-danger">{news.title}</span> ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleHide}>
                        Hide
                    </Button>
                </Modal.Footer>
            </Modal>
     )
}

export default HideNewsModal;