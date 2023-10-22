import React, {useState} from 'react';
import { Button, FormControl, Row } from 'react-bootstrap';
import DeleteCageModal from './DeleteCageModal';

function CageTableContent({index, cage}) {
    const [showState, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let [message, setMessage] = useState("");


    const [cageName, setCageName] = useState(cage.cageName);
    const [areaName, setAreaName] = useState(cage.area.areaName);

    let handleUpdate = () => {
        fetch(`https://localhost:7193/api/Cage/`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                cageId: cage.cageId,
                cageName: cageName,
                areaId: cage.area.areaId,
                area: {
                    areaId: cage.area.areaId,
                    areaName: areaName,
                    isDelete: false
                },
                isDelete: false
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            }
        })
        .then((res) => {
            if (res.ok) {
                setMessage("Update successfully");
                window.location.reload(false);
            } else {
                setMessage("Update failed");
            }
        }).catch(rejected => {
            console.log(rejected);
        });

    }
    let handleDelete = () => {
        fetch(`https://localhost:7193/api/Cage/${cage.cageId}`, {
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
        window.location.reload(false);
    }
    
    return ( 
        <tr>
            <td>{index+1}</td>
            <td>
                <FormControl 
            type='text' 
            value={cageName}
            onChange={
                (e) => setCageName(e.target.value)
            } />
            <Row className="justify-content-md-center text-warning">{message}</Row>
            </td>
            <td>
                <FormControl 
            type='text' 
            value={areaName}
            onChange={
                (e) => setAreaName(e.target.value)
            } />
            <Row className="justify-content-md-center text-warning">{message}</Row>
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm" onClick={handleUpdate}>Update</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm" onClick={handleShow}>Delete</Button>
            </td>
            <DeleteCageModal cage={cage} show={showState} handleClose={handleClose} handleDelete={handleDelete} />
        </tr>
     )
}

export default CageTableContent;