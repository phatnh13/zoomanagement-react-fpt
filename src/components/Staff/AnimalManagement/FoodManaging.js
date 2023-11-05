import React, { useState, useEffect } from "react";
import { Pagination, Col, Row, Container, Form, Button, Card } from "react-bootstrap";
import FoodTable from "./Food/FoodTable";

function FoodManaging() {
    const [foodList, setFoodList] = useState([]);
    const [foodName, setFoodName] = useState("");
    const [searchFoodString, setSearchFoodString] = useState("");
    const [totalFoodPages, setTotalFoodPages] = useState(0);
    const [currentFoodPage, setCurrentFoodPage] = useState(1);

    //Dummy state to force re-render
    const [reload, setReload] = useState(false);

    //#region Pagination
    let PaginationFoodLoad = () => {
        let items = [];
        if (totalFoodPages > 1) {
            for (let page = 1; page <= totalFoodPages; page++) {
                items.push(<Pagination.Item key={page} onClick={onFoodPaginationClick}>{page}</Pagination.Item>)
            }
        }
        return items;
    }
    const onFoodPaginationClick = (e) => {
        setCurrentFoodPage(e.target.text);
    }
    //#endregion

    useEffect(() => {
        fetch(`https://localhost:7193/api/Food?pageNumber=${currentFoodPage}&searchBy=FoodName&searchString=${searchFoodString}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                setFoodList(data.pagingList);
                setTotalFoodPages(data.totalPages);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, [reload, currentFoodPage, searchFoodString]);
    return (
        <Container fluid>
            <Row className="d-flex justify-content-center mt-2">
                <Col lg={10} md={10} sm={12}>
                    <Row>
                        <FoodTable foodList={foodList} reloadState={{ reload, setReload }} searchFood={{ searchFoodString, setSearchFoodString }} />
                        <Pagination size="md" className="d-flex justify-content-center">
                            {PaginationFoodLoad()}
                        </Pagination>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default FoodManaging;