import React from "react";
import { Modal } from "react-bootstrap";
function DeleteSkillModal({show, handleClose, skill, handleDelete}) {
    return ( 
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Skill</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure to delete skill <span className="text-danger">{skill.skillName}</span></p>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                <button className="btn btn-secondary" onClick={handleClose}>Cancel</button>
            </Modal.Footer>
        </Modal>
     )
}

export default DeleteSkillModal;