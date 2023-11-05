import React, { useEffect, useState } from "react";
import { Button, Modal, Table, Form, Pagination, Row, Col } from "react-bootstrap";
import { DateHelper } from "../../../DateHelper";

function AnimalShowZooTrainerModal({ show, handleClose, animal, reloadState }) {
    const [user, setUser] = useState({
        userId: 0,
        fullName: "",
    });
    const [trainerList, setTrainerList] = useState([]);
    const [allTrainer, setAllTrainer] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage1, setCurrentPage1] = useState(1);
    const [searchString, setSearchString] = useState("");
    //#region Pagination
    let PaginationLoad = () => {
        let items = [];
        if (totalPages > 1) {
            for (let page = 1; page <= totalPages; page++) {
                items.push(<Pagination.Item key={page} onClick={onPaginationClick}>{page}</Pagination.Item>)
            }
        }
        return items;
    }

    const onPaginationClick = (e) => {
        setCurrentPage1(e.target.text);
    }
    //#endregion

    let handleAssignTrainer = () => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/AnimalUser`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
            body: JSON.stringify(
                {
                    animalId: animal.animalId,
                    userId: user.userId,
                }
            )
        })
            .then((res) => res.json())
            .then(() => {
                reloadState.setReload(!reloadState.reload);
            }).catch(rejected => {
                console.log(rejected);
            });
    }
    let createTrainerList = () => {
        let list = [];
        {trainerList.map((trainer, index) => 
            {
            let handleDelete = () => {
                fetch(`https://vietnamzoo.azurewebsites.net/api/AnimalUser/animal-trainer?animalId=${animal.animalId}&userId=${trainer.userId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-type": "text/plain; charset=UTF-8",
                        "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
                    },
                })
                    .then((res) => res.json())
                    .then(data => {
                        console.log(data);
                        reloadState.setReload(!reloadState.reload);
                    }).catch(rejected => {
                        console.log(rejected);
                    });
            }
            return list.push(<tr key={index}>
                <td>{trainer.fullName}</td>
                <td><Button onClick={handleDelete} variant="danger" size="sm">Delete</Button></td>
                </tr>);
        }
        )
        return list;
    }}
    
    useEffect(() => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/ZooTrainer?pageNumber=${currentPage1}&searchBy=FullName&searchString=${searchString}`, {
            method: "GET",
            headers: {
                "Content-type": "text/plain; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setAllTrainer(data.pagingList);
                setTotalPages(data.totalPages);
            }).catch(rejected => {
                console.log(rejected);
            });
        fetch(`https://vietnamzoo.azurewebsites.net/api/AnimalUser/animal/${animal.animalId}`, {
            method: "GET",
            headers: {
                "Content-type": "text/plain; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setTrainerList(data);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, [reloadState.reload, currentPage1, searchString, animal.animalId]);

    return (
        <Modal size="lg" show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{animal.animalName}'s trainers </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="justify-content-center">
                    <Col lg={6} md={6} sm={6} >
                        <Table hover responsive="md">
                            <thead>
                                <tr>
                                    <th>Trainer's Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {createTrainerList()}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label>Assign <strong>{animal.animalName}</strong> to: <strong>{user.fullName}</strong></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Search by trainer's name"
                        value={searchString}
                        onChange={(e) =>
                            setSearchString(e.target.value)} />
                    <Table>
                        <tbody>
                            {allTrainer.map((trainer, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{trainer.fullName}</td>
                                        <td>{trainer.email}</td>
                                        <td>{trainer.phoneNumber}</td>
                                        <td>{trainer.address}</td>
                                        <td>{DateHelper.formatDate(trainer.dateOfBirth)}</td>
                                        <td>
                                            <Button size="sm"
                                                onClick={() =>
                                                    setUser({ userId: trainer.userId, fullName: trainer.fullName })}
                                            >
                                                Select
                                            </Button></td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </Table>
                    <Pagination size="md" className="d-flex justify-content-center">
                        {PaginationLoad()}
                    </Pagination>
                    <Button className="my-2" size="sm" onClick={handleAssignTrainer}>
                        Assign Zoo Trainer
                    </Button>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AnimalShowZooTrainerModal;