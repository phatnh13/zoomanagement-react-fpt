import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Pagination, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NewsTable from "./NewsTable";
import { Spin } from "antd";
function NewsManaging() {

    const [searchString, setsearchString] = useState("");
    const [totalPages, setTotalPages] = useState(0);
    const [searchBy, setSearchBy] = useState("Title")
    const [currentPage, setCurrentPage] = useState(1);
    const [newsList, setNewsList] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [reload, setReload] = useState(false);

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
    }
    //#endregion


    //Handle Add
    const navigate = useNavigate();
    let handleAddNews = () => {
        navigate("/staff/news/add");
    }
    useEffect(() => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/News?pageNumber=${currentPage}&searchBy=${searchBy}&searchString=${searchString}`)
            .then(res => res.json())
            .then(data => {
                setNewsList(data.pagingList);
                setTotalPages(data.totalPages);
                setIsLoading(false);
            })
    }, [currentPage, searchBy, searchString, reload]);
    return (
        <Container fluid>
            <Row className="vh-20 d-flex justify-content-center align-items-center m-3 pb-1 border-bottom">
                <Col lg={3} md={3} xs={12}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Select
                            value={searchBy}
                            onChange={(e) => {
                                setSearchBy(e.target.value)
                            }}
                        >
                            <option value={"Title"}>Title</option>
                            <option value={"Author"}>Author</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col lg={6} md={6} xs={12}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Control
                            type="text"
                            placeholder="Search title"
                            value={searchString}
                            onChange={(e) => {
                                setCurrentPage(1);
                                setsearchString(e.target.value)
                                console.log(searchString);
                                // searchStaff();

                            }}
                        >
                        </Form.Control>
                    </Form.Group>
                </Col>
                {/*Start add button*/}
                <Col>
                    <div className="mb-3 d-grid">
                        <Button variant="outline-primary" size="sm" onClick={handleAddNews}>Add news</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                {isLoading === true ? (
                    <Col>
                        <Spin />
                    </Col>
                ) : (
                    <Col>
                        <NewsTable newsList={newsList} reloadState={{reload, setReload}} />
                        <Pagination size="md" className="d-flex justify-content-center">
                            {PaginationLoad()}
                        </Pagination>
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default NewsManaging;