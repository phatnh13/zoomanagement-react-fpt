import React, {useState} from 'react';
import { Button, FormControl, Image } from 'react-bootstrap';
import DeleteAreaModal from './Modal/DeleteAreaModal';
import Delete from "../../../assets/delete.png";
import Update from "../../../assets/edit.png";

function AreaTableContent({area, reloadState}) {
    //Modal Handling
    const [showState, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Variables
    const [areaName, setAreaName] = useState(area.areaName);

    let handleUpdate = () => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/Areas/`, {
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
        fetch(`https://vietnamzoo.azurewebsites.net/api/Areas/${area.areaId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => {
                if (res.ok) {
                    reloadState.setReload(!reloadState.reload);
                } else {
                    alert("Delete failed");
                }
            })
            .catch(rejected => {
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
                <Button variant="outline-warning" size="sm" onClick={handleUpdate}><Image style={{ height: '1rem', width: '1rem' }} src={Update}></Image></Button>
            </td>
            <td className="text-center">
                <Button variant="outline-danger" size="sm" onClick={handleShow}><Image style={{ height: '1rem', width: '1rem' }} src={Delete}></Image></Button>
            </td>
            <DeleteAreaModal area={area} show={showState} handleClose={handleClose} handleDelete={handleDelete} />
        </tr>
     )
}

export default AreaTableContent;