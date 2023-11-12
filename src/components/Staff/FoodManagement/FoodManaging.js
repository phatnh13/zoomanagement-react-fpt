import React, { useState, useEffect } from "react";
import { Pagination, Col, Row, Container } from "react-bootstrap";
import FoodTable from "./FoodTable";
import { Spin } from "antd";

function FoodManaging() {
    const [foodList, setFoodList] = useState([]);
    const [searchFoodString, setSearchFoodString] = useState("");
    const [totalFoodPages, setTotalFoodPages] = useState(0);
    const [currentFoodPage, setCurrentFoodPage] = useState(1);

    //Dummy state to force re-render
    const [reload, setReload] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
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
        fetch(`https://vietnamzoo.azurewebsites.net/api/Food?pageNumber=${currentFoodPage}&searchBy=FoodName&searchString=${searchFoodString}`, {
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
                setIsLoading(false);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, [reload, currentFoodPage, searchFoodString]);
    return (
        <Container fluid>
            <Row className="d-flex justify-content-center mt-2">
                <Col lg={10} md={10} sm={12}>
                    {isLoading === true ? (
                        <Row>
                            <Spin />
                        </Row>
                    ) : (
                        <Row>
                            <FoodTable foodList={foodList} reloadState={{ reload, setReload }} searchFood={{ searchFoodString, setSearchFoodString }} />
                            <Pagination size="md" className="d-flex justify-content-center">
                                {PaginationFoodLoad()}
                            </Pagination>
                        </Row>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default FoodManaging;