import React, {useState} from "react";
import {Button} from "react-bootstrap";
import TrainerDeleteModal from "./TrainerDeleteModal";

const TrainerTableContent = ({user, index}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let handleUpdate = () => {
        console.log({user});
    }
    let handleDelete = () => {
        fetch(`https://localhost:7193/api/User/${user.userId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
            }).catch(rejected => {
                console.log(rejected);
            });
        handleClose();
        window.location.reload(false);
    }
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
                <Button href="/staff/trainer/update" variant="outline-primary" size="sm" onClick={handleUpdate}>Update</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm" onClick={handleShow}>Delete</Button>
            </td>
            <TrainerDeleteModal show={show} handleClose={handleClose} handleDelete={handleDelete} user={user} />
        </tr>
        // <h5>row</h5>
    )
}
export default TrainerTableContent;