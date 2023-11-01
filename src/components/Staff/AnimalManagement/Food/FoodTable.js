import React from "react";
import { Container, Table, Row, Col, Form } from "react-bootstrap";
import FoodTableContent from "./FoodTableContent";
const FoodTable = ({ foodList, reloadState, searchFood }) => {
    return (
        <Container>
            <Row className="vh-20 d-flex justify-content-center align-items-center m-3 pb-1 border-bottom">
                <Col>
                    <h5>FOOD TABLE</h5>
                </Col>
                {/*Search bar */}
                <Col lg={8} md={8} xs={11}>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={searchFood.searchFoodString}
                            onChange={(e) => { searchFood.setSearchFoodString(e.target.value) }}>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th className="col-1">Food ID</th>
                        <th className="col-7">Food Name</th>
                        <th className="col-2"></th>
                        <th className="col-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {foodList.map((food, index) => {
                        return <FoodTableContent key={index} reloadState={reloadState} food={food} />;
                    })}
                </tbody>
            </Table>
        </Container>
    )
}
export default FoodTable;