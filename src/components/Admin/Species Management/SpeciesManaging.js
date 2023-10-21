import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Form, Button,Pagination } from 'react-bootstrap';
import SpeciesTable from './SpeciesTable';

function SpeciesManaging() {
    const [species, setSpecies] = useState(
        [
            {
                "id": 1,
                "name": "Cat",
                "description": "A cat is a small, usually furry, domesticated, carnivorous mammal.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            },
            {
                "id": 2,
                "name": "Dog",
                "description": "A cat is a small, usually furry, domesticated, carnivorous mammal.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            },
            {
                "id": 3,
                "name": "Bird",
                "description": "A cat is a small, usually furry, domesticated, carnivorous mammal.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            },
            
        ]
        ); 
    var [searchString, setsearchString] = useState("");
    var [totalPages, setTotalPages] = useState(0);
    var [currentPage, setCurrentPage] = useState(1);
    var [searchBy, setSearchBy] = useState("SpeciesName");

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
        fetch(`https://localhost:7193/api/Species?pageNumber=${currentPage}&searchBy=${searchBy}&searchString=${searchString}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + localStorage.getItem("token")
            },
        })
            .then((res) => res.json())
            .then(data => {
                setSpecies(data.pagingList);
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
                        <Form.Select>
                            <option>Name</option>
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
                        <Button href='/admin/species/add' variant="outline-primary" size="sm">Add</Button>
                    </div>
                </Col>
                {/*End add button*/}
            </Row>
            <Row>
                <Col>
                    {/*Start Table*/}
                    <SpeciesTable speciesList={species} />
                    {/*Start Table*/}
                    <Pagination size="md" className="d-flex justify-content-center">
                        {PaginationLoad()}
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
}

export default SpeciesManaging;