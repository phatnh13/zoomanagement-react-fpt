import React, { useState } from "react";
import { Button, Card, Col, Row, Image } from "react-bootstrap";
import DeleteSkillModal from "./Modal/DeleteSkillModal";
import UpdateSkillModal from "./Modal/UpdateSkillModal";
import Update from "../../../assets/edit.png";
import Delete from "../../../assets/delete.png";
function SkillContent({skill, reloadState, updateSkill}) {
    //#region Handle Modal
        //Delete modal
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);
        //Update modal
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const handleCloseUpdateModal = () => setShowUpdateModal(false);
    const handleShowUpdateModal = () => setShowUpdateModal(true);
    //#endregion

    let handleDeleteSkill = () => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/Skill/${skill.skillId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.ok) {
                    reloadState.setReload(!reloadState.reload);
                    handleCloseDeleteModal();
                }
                else {
                    alert("Delete skill failed");
                }
            }).catch((rejected) => {
                console.log(rejected);
            });
    }
    const [updatedSkill, setUpdatedSkill] = useState(skill.skillName);
    let handleUpdateSkill = () => {
        updateSkill(skill.skillId, updatedSkill);
        handleCloseUpdateModal();
    }

    return (
        <Card className="mb-2">
            <Card.Body>
                <Row>
                    <Col lg={8} md={6} sm={6}>
                    <Card.Text>
                        <span className="text-success" style={{fontSize: 24}}>
                            {skill.skillName}
                        </span>
                    </Card.Text>
                    </Col>
                    <Col lg={2} md={3} sm={3} className="d-grid">
                        <Button variant="outline-warning" size="md" onClick={handleShowUpdateModal}><Image style={{ height: '1.5rem', width: '1.5rem' }} src={Update}></Image></Button>
                    </Col>
                    <Col lg={2} md={3} sm={3} className="d-grid">
                        <Button variant="outline-danger" size="md" onClick={handleShowDeleteModal}><Image style={{ height: '1.5rem', width: '1.5rem' }} src={Delete}></Image></Button>
                    </Col>
                </Row>
            </Card.Body>
            <UpdateSkillModal
                show={showUpdateModal}
                handleClose={handleCloseUpdateModal}
                handleUpdate={handleUpdateSkill}
                updatedSkill={{updatedSkill, setUpdatedSkill}} />
            <DeleteSkillModal 
                show={showDeleteModal} 
                handleClose={handleCloseDeleteModal} 
                handleDelete={handleDeleteSkill}
                skill={skill}/>
        </Card>
    )
}

export default SkillContent;