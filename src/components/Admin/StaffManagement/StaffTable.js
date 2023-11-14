import React from "react";
import { Container, Table, } from "react-bootstrap";
import StaffTableContent from "./StaffTableContent";
const StaffTable = ({ userList, reloadState }) => {
    
    return (
        <Container>
            <div className="text-uppercase" >
                <h3>staffs managing table</h3>
            </div>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th>No</th>
                        <th className="col-3">Full Name</th>
                        <th>UserName</th>
                        <th>Gender</th>
                        <th>phoneNumber</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((control, index) => {
                        return <StaffTableContent key={index} index={index} user={control} reloadState={reloadState} />;
                    })}
                </tbody>
            </Table>

        </Container>
    )
}
export default StaffTable;