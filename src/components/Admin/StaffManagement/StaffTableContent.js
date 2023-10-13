import React from "react";
import {Button} from "react-bootstrap";

const StaffTableContent = ({user, index}) => {
    return (
        <tr>
            <td>{index+1}</td>
            <td>{user.userId}</td>
            <td>{user.userName}</td>
            <td>{user.fullName}</td>
            <td>{user.gender}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.email}</td>
            <td>{user.dateOfBirth}</td>
            <td className="text-center">
                <Button href="/" variant="outline-primary" size="sm">Update</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm">Delete</Button>
            </td>
        </tr>
        // <h5>row</h5>
    )
}
export default StaffTableContent;
