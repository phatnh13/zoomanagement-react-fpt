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
                        <th className="col-1">User ID</th>
                        <th className="col-2">User Name</th>
                        <th className="col-2">Full Name</th>
                        <th className="col-1">Gender</th>
                        <th>phoneNumber</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th className="col-1"></th>
                        <th className="col-1"></th>
                        <th className="col-1"></th>
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