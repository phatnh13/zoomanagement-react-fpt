import React, { useEffect, useState } from "react";
import { Modal, Row, Col, Form, Button } from "react-bootstrap";
import {DateHelper} from "../../../DateHelper";
function MoveAnimalModal({ show, handleClose, animal, reloadState}) {
    const [cageId, setCageId] = useState();
    const [areaId, setAreaId] = useState(1);
    const [areaList, setAreaList] = useState([]);
    const [cageList, setCageList] = useState([]);

    
    const toDay = DateHelper.getToday();
    let onMoveClick = () => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/AnimalCage/move-animal/`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
            body: JSON.stringify({
                animalId: animal.animalId,
                cageId: cageId,
                dayIn: toDay,
                isIn: true,
            })
        })
            .then((res) => {
                if (res.ok) {
                    alert("Move successfully");
                    reloadState.setReload(!reloadState.reload);
                    handleClose();
                } else {
                    alert("Move failed");
                }
            })
            .catch(rejected => {
                console.log(rejected);
            });
    }
    //Select Cage, using area to narrow down the list
    useEffect(() => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/Areas`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setAreaList(data);
            }).catch(rejected => {
                console.log(rejected);
            });
        fetch(`https://vietnamzoo.azurewebsites.net/api/Cage/area/${areaId}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setCageList(data);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, [areaId]);
    return ( 
        <Modal show={show} onHide={handleClose}>
            {console.log(cageList, "cageList")}
            {console.log(areaList, "areaList")}
            <Modal.Header closeButton>
                <Modal.Title>Move Animal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you want to move {animal.animalName} to this cage?
                <Row>
                    <Col lg={4} md={4} sm={12}>
                        <Form.Select value={areaId} onChange={(e) => {setAreaId(e.target.value)}}>
                            <option>Choose Area</option>
                            {areaList.map((area, index) => {
                                return <option index={index} value={area.areaId}>{area.areaName}</option>
                            })}
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select value={cageId} onChange={(e) => {setCageId(e.target.value)}}>
                            <option>Choose Cage</option>
                            {cageList.map((cage, index) => {
                                return <option index={index} value={cage.cageId}>{cage.cageName}</option>
                            })}
                        </Form.Select>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="warning" onClick={onMoveClick}>
                    Move
                </Button>
            </Modal.Footer>
        </Modal>
     )
}

export default MoveAnimalModal;