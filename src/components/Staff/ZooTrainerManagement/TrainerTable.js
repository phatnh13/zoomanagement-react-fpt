import React from "react";
import { Container, Table, Badge } from "react-bootstrap";
import TrainerTableContent from "./TrainerTableContent";
const TrainerTable = ({ trainerList }) => {
    return (
        <Container>
            <div className="text-uppercase" >
                <h3>trainer's managing table</h3>
            </div>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Full Name</th>
                        <th>Gender</th>
                        <th>phoneNumber</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {trainerList.map((control, index) => {
                        return <TrainerTableContent key={index} index={index} user={control} />;
                    })}
                </tbody>
            </Table>
        </Container>
    )
}
export default TrainerTable;