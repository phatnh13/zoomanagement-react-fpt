import React from "react";
import { Container, Table } from "react-bootstrap";
import TrainerTableContent from "./TrainerTableContent";
const TrainerTable = ({ trainerList, reloadState }) => {
    return (
        <Container>
            <div className="text-uppercase" >
                <h3>trainer managing table</h3>
            </div>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Full Name</th>
                        <th>Gender</th>
                        <th>phoneNumber</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {trainerList.map((control, index) => {
                        return <TrainerTableContent key={index} user={control} reloadState={reloadState} />;
                    })}
                </tbody>
            </Table>
        </Container>
    )
}
export default TrainerTable;