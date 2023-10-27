import React from "react";
import { Container, Table } from "react-bootstrap";
import AnimalTableContent from "./AnimalTableContent";
const AnimalTable = ({ animalList }) => {
    return (
        <Container>
            <div className="text-uppercase" >
                <h3>trainer's managing table</h3>
            </div>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th>Animal ID</th>
                        <th>Species ID</th>
                        <th>Animal Name</th>
                        <th>Date Arrive</th>
                        <th>Status</th>
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