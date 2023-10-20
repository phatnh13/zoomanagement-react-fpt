import React, {useEffect, useState} from "react";
import { Button, Container, Row, Col, Form, Pagination } from "react-bootstrap";
import CageTable from "./CageTable";
import AddCageModal from "./AddCageModal";

function CageManaging() {
    const [showState, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [searchString, setsearchString] = useState("");
    const [currentPage, setCurrentPage] = useState(1); //page number
    const [searchBy, setSearchBy] = useState("CageName"); //search by column name
    const [totalPages, setTotalPages] = useState(0);
    const [cages, setCages] = useState([]);

    //#region Pagination
    let PaginationLoad = () => {
        let items = [];
        for (let page = 1; page <= totalPages; page++) {
            items.push(<Pagination.Item key={page} onClick={onPaginationClick}>{page}</Pagination.Item>)
        }
        return items;
    }

    const onPaginationClick = (e) => {
        setCurrentPage(e.target.text);
    }
    //#endregion

    useEffect(() => {

        fetch(`https://localhost:7193/api/Cage?pageNumber=${currentPage}&searchBy=${searchBy}&searchString=${searchString}`, {
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
    }, [currentPage, searchBy, searchString]);


    return (
        <Container fluid>
            <Row className="vh-20 d-flex justify-content-center align-items-center m-3 pb-1 border-bottom">
            {/*Start search*/}
                {/*Search filter */}
                <Col lg={3} md={3} xs={12}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Select
                            value={searchBy}
                            onChange={(e) => {
                                setSearchBy(e.target.value)
                            }}
                        >
                            <option value={"CageName"}>Cage Name</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                {/*Search filter */}
                {/*Search bar */}
                <Col lg={8} md={8} xs={11}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={searchString}
                            onChange={(e) => { setsearchString(e.target.value) }}>
                        </Form.Control>
                    </Form.Group>
                </Col>
                {/*Search bar */}
            {/*End search*/}
                {/*Start add button*/}
                <Col lg={1} md={1} xs={1}>
                    <div className="mb-3 d-grid">
                        <Button variant="outline-primary" size="sm" onClick={handleShow}>Add</Button>
                    </div>
                </Col>
                {/*End add button*/}
            </Row>
            <Row>
                <Col>
                    {/*Start Table*/}
                    <CageTable cageList={cages} />
                    <Pagination size="md" className="d-flex justify-content-center">
                        {PaginationLoad()}
                    </Pagination>
                    {/*Start Table*/}
                </Col>
            </Row>
            {/*Start modal*/}
            <AddCageModal show={showState} handleClose={handleClose} />
            {/*End modal*/}
        </Container>
    )
}

export default CageManaging;