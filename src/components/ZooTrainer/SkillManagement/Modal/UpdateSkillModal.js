import React from "react";
import { Form, Modal } from "react-bootstrap";
function UpdateSkillModal({show, handleClose, handleUpdate, updatedSkill}) {
    return ( 
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Skill</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    type="text"
                    placeholder="Update Skill"
                    value={updatedSkill.updatedSkill}
                    onChange={(e) => {
                        updatedSkill.setUpdatedSkill(e.target.value);
                    }}
                />
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-danger" onClick={handleUpdate}>Update</button>
                <button className="btn btn-secondary" onClick={handleClose}>Cancel</button>
            </Modal.Footer>
        </Modal>
     )
}

export default UpdateSkillModal;