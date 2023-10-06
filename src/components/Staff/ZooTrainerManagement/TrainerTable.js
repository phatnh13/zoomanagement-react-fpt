import React from "react";
import { Container, Table, Badge } from "react-bootstrap";
import TrainerTableContent from "./TrainerTableContent";
const StaffTable = ({userList}) => {
    return (
        <Container>
            <div className="text-uppercase" >
                <h3>trainer's managing table <Badge size="sm" bg="secondary">2</Badge></h3>
            </div>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>UserName</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>phoneNumber</th>
                        <th>Email</th>
                        <th className="col-1">password</th>
                        <th className="col-1">isDelete</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        {userList.map((control, index) => {
                            return <TrainerTableContent key={index} index={index} user={control} />;
                        })}
                </tbody>
            </Table>
        </Container>
    )
}
export default StaffTable;