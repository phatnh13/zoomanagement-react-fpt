import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StaffDeleteModal from "./StaffDeleteModal";
import { DateHelper } from "../../DateHelper";
import Delete from "../../../assets/delete.png";
import Update from "../../../assets/edit.png";

const StaffTableContent = ({ user, reloadState, index }) => {
    const [showDeleteModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const navigate = useNavigate();
    let handleUpdate = () => {
        navigate(`/admin/staff/update/`, {state: {id: user.userId}});
    }

    let handleDelete = () => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/User/${user.userId}`, {
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
        reloadState.setReload(!reloadState.reload);
    }
    return (
        <tr>
            <td>{index+1}</td>
            <td className="col-3">{user.fullName}</td>
            <td>{user.userName}</td>
            <td>{user.gender}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.email}</td>
            <td>{DateHelper.formatDate(user.dateOfBirth)}</td>
            <td className="text-center">
                <Button variant="outline-warning" size="sm" h onClick={handleUpdate}><Image style={{height: '1rem', width: '1rem'}} src={Update}></Image></Button>
            </td>
            <td className="text-center">
                <Button variant="outline-danger" size="sm" onClick={handleShow}><Image style={{height: '1rem', width: '1rem'}} src={Delete}></Image></Button>
            </td>
            {/* <UpdateStaff user={user} /> */}
            <StaffDeleteModal show={showDeleteModal} handleClose={handleClose} handleDelete={handleDelete} user={user} />
        </tr>
    )
}
export default StaffTableContent;