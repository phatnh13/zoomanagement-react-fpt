import React from "react";
import { Container, Table, } from "react-bootstrap";
import TrainerTableSmallContent from "./TrainerTableSmallContent";
const TrainerTableSmall = ({ trainerList, setTrainerId }) => {
    return (
        <Container>
            <div>
                <p className="">Click to assign trainer</p>
            </div>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th className="col-3">User ID</th>
                        <th>Full Name</th>
                    </tr>
                </thead>
                <tbody>
                    {trainerList.map((control, index) => {
                        return <TrainerTableSmallContent key={index} user={control} setTrainerId={setTrainerId} />;
                    })}
                </tbody>
            </Table>
        </Container>
    )
}
export default TrainerTableSmall;