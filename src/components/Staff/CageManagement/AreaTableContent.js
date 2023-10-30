import React, {useEffect, useState, Redirect} from 'react';
import { Button, FormControl, Row } from 'react-bootstrap';
import DeleteAreaModal from './DeleteAreaModal';

function AreaTableContent({area, reloadState}) {
    //Modal Handling
    const [showState, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Message Handling
    let [message, setMessage] = useState("");
    //Variables
    const [areaName, setAreaName] = useState(area.areaName);

    let handleUpdate = () => {
        fetch(`https://localhost:7193/api/Areas/`, {
            method: "PUT",
            body: JSON.stringify({
                areaId: area.areaId,
                areaName: areaName,
                isDelete: false
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            }
        })
        .then((res) => {
            if (res.ok) {
                alert("Update successfully");
                reloadState.setReload(!reloadState.reload);
            } else {
                alert("Update failed");
            }
        }).catch(rejected => {
            console.log(rejected);
        });
    }

    let handleDelete = () => {
        fetch(`https://localhost:7193/api/Areas/${area.areaId}`, {
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
            <td>{area.areaId}</td>
            <td>
                <FormControl 
                type='text' 
                value={areaName}
                onChange={
                (e) => setAreaName(e.target.value)} />
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm" onClick={handleUpdate}>Update</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm" onClick={handleShow}>Delete</Button>
            </td>
            <DeleteAreaModal area={area} show={showState} handleClose={handleClose} handleDelete={handleDelete} />
        </tr>
     )
}

export default AreaTableContent;