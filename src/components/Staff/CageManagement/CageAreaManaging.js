import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Form, Pagination } from "react-bootstrap";
import CageTable from "./CageTable";
import AddCageModal from "./Modal/AddCageModal";
import AreaTable from "./AreaTable";
import AddAreaModal from "./Modal/AddAreaModal";
import { Spin } from "antd";

function CageAreaManaging() {
    //#region Modal
    //Add cage modal
    const [showAddCage, setShowAddCage] = useState(false);
    const handleCloseAddCage = () => setShowAddCage(false);
    const handleShowAddCage = () => setShowAddCage(true);
    //Add area modal
    const [showAddArea, setShowAddArea] = useState(false);
    const handleCloseAddArea = () => setShowAddArea(false);
    const handleShowAddArea = () => setShowAddArea(true);
    //#endregion

    const [searchString, setsearchString] = useState("");
    const [currentPage, setCurrentPage] = useState(1); //page number
    const [totalPages, setTotalPages] = useState(0);
    const [searchBy, setSearchBy] = useState("CageName"); //search by column name

    const [cages, setCages] = useState([]);
    const [areas, setAreas] = useState([]);
    const [reload, setReload] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

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
        setCurrentPage(e.target.text);
        console.log(e.target.text);
    }
    //#endregion

    useEffect(() => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/Cage?pageNumber=${currentPage}&searchBy=${searchBy}&searchString=${searchString}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setCages(data.pagingList);
                setTotalPages(data.totalPages);
            }).catch(rejected => {
                console.log(rejected);
            });
        fetch(`https://vietnamzoo.azurewebsites.net/api/Areas`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            }
        })
            .then((res) => res.json())
            .then(data => {
                setAreas(data);
                setIsLoading(false);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, [reload, currentPage, searchBy, searchString]);

    return (
        <Container fluid>
            <Row className="vh-20 d-flex justify-content-center align-items-center m-3 pb-1 border-bottom">
                {/*Start search*/}
                <Col lg={3} md={3} xs={12}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Select
                            value={searchBy}
                            onChange={(e) => {
                                setSearchBy(e.target.value)
                            }}
                        >
                            <option value={"CageName"}>Cage Name</option>
                            <option value={"AreaName"}>Area Name</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                {/* Search bar */}
                <Col lg={5} md={5} xs={12}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={searchString}
                            onChange={(e) => { setsearchString(e.target.value) }}>
                        </Form.Control>
                    </Form.Group>
                </Col>
                {/*Start add button*/}
                <Col className="d-flex flex-row">
                    <div className="col-6 mb-3 m-1 d-grid">
                        <Button variant="outline-primary" size="sm" onClick={handleShowAddArea}>Add Area</Button>
                    </div>
                    <div className="col-6 mb-3 m-1 d-grid">
                        <Button variant="outline-primary" size="sm" onClick={handleShowAddCage}>Add Cage</Button>
                    </div>
                </Col>
            </Row>
            {isLoading === true ? (
                <Row>
                    <Spin />
                </Row>
            ) : (
                <Row className="">
                    <Col lg={5} md={12} xs={12}>
                        <AreaTable areaList={areas} reloadState={{ reload, setReload }} />
                    </Col>
                    <Col lg={7} md={12} xs={12}>
                        <CageTable cageList={cages} reloadState={{ reload, setReload }} />
                    </Col>
                </Row>
            )}
            <Row>
                <Col lg={5} md={12} xs={12}></Col>
                <Col>
                    <Pagination size="md" className="d-flex justify-content-center">
                        {PaginationLoad()}
                    </Pagination>
                </Col>
            </Row>
            <AddCageModal
                show={showAddCage}
                handleClose={handleCloseAddCage}
                areasList={areas}
                reloadState={{ reload, setReload }} />
            <AddAreaModal
                show={showAddArea}
                handleClose={handleCloseAddArea}
                reloadState={{ reload, setReload }} />

        </Container>
    )
}

export default CageAreaManaging;