import React from "react";
import { Container, Table } from "react-bootstrap";
import AnimalTableContent from "./AnimalTableContent";
const AnimalTable = ({ animalList }) => {
    return (
        <Container>
            <div className="text-uppercase" >
                <h3>Animals managing table</h3>
            </div>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th className="col-1">Animal ID</th>
                        <th className="col-1">Species ID</th>
                        <th className="col-1">Animal Name</th>
                        <th className="col-1">Date Arrive</th>
                        <th className="col-5">Status</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {animalList.map((animal, index) => {
                        return <AnimalTableContent key={index} animal={animal} />;
                    })}
                </tbody>
            </Table>
        </Container>
    )
}
export default AnimalTable;