import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";

const StaffTableContent = ({user, index}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let handleDelete = () => {
        fetch(`https://localhost:7193/api/User/${user.userId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
            }).catch(rejected => {
                console.log(rejected);
            });
        handleClose();
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
                <Button href="/" variant="outline-primary" size="sm">Update</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm" onClick={handleShow}>Delete</Button>
            </td>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to delete <span className="text-danger">{user.fullName}</span> ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </tr>
        
    )
}
export default StaffTableContent;
