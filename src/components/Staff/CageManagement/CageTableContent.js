import React, {useState} from 'react';
import { Button, FormControl } from 'react-bootstrap';
import DeleteCageModal from './DeleteCageModal';

function CageTableContent({index, cage}) {
    const [showState, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <td><FormControl type='text' value={cage.cageName} /></td>
            <td><FormControl type='text' value={cage.area.areaName}/></td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm">Update</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm" onClick={handleShow}>Delete</Button>
            </td>
            <DeleteCageModal cage={cage} show={showState} handleClose={handleClose} handleDelete={handleDelete} />
        </tr>
     )
}

export default CageTableContent