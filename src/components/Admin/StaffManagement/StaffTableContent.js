import React from "react";
import {Button} from "react-bootstrap";

const StaffTableContent = ({user}) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.UserName}</td>
            <td>{user.Gender}</td>
            <td>{user.Age}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.Email}</td>
            <td>{user.password}</td>
            <td>{user.isDelete}</td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm">Update</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm">Delete</Button>
            </td>
        </tr>
        // <h5>row</h5>
    )
}
export default StaffTableContent;