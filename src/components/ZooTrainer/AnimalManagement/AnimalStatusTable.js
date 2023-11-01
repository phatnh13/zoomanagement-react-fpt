import React from "react";
import { Container, Table } from "react-bootstrap";
import AnimalStatusTableContent from "./AnimalStatusTableContent";
const AnimalStatusTable = ({ animalList, reloadState }) => {
    return (
        <Container>
            <div className="text-uppercase" >
                <h3>Animals managing table</h3>
            </div>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th className="col-1">Animal ID</th>
                        <th className="col-1">Animal Name</th>
                        <th className="col-1">Date Arrive</th>
                        <th className="col-8">Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {animalList.map((animal, index) => {
                        return <AnimalStatusTableContent key={index} reloadState={reloadState} animal={animal} />;
                    })}
                </tbody>
            </Table>
        </Container>
    )
}
export default AnimalStatusTable;