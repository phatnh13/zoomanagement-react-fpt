import React, {useState, useEffect} from 'react';
import { Button, FormControl, Image } from 'react-bootstrap';
import DeleteCageModal from './Modal/DeleteCageModal';
import ShowAnimalModal from './Modal/ShowAnimalModal';
import Delete from "../../../assets/delete.png";
import Update from "../../../assets/edit.png";
function CageTableContent({cage, reloadState}) {
    //#region Modal
        //Delete Modal
    const [showDeleteModal, setShowDelete] = useState(false);
    const handleCloseDeleteModal = () => setShowDelete(false);
    const handleShowDeleteModal = () => setShowDelete(true);
        //Show Animal Modal
    const [showAnimalModal, setShowAnimal] = useState(false);
    const handleCloseAnimalModal = () => setShowAnimal(false);
    const handleShowAnimalModal = () => setShowAnimal(true);
    //#endregion
    const [cageName, setCageName] = useState(cage.cageName);
    const [areaName, setAreaName] = useState(cage.area.areaName);
    
    useEffect(() => {
        setCageName(cage.cageName);
        setAreaName(cage.area.areaName);
      }, [cage.cageName, cage.area.areaName]);

    let handleUpdate = () => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/Cage/`, {
            method: "PUT",
            body: JSON.stringify({
                cageId: cage.cageId,
                cageName: cageName,
                areaId: cage.area.areaId,
                area: {
                    areaId: cage.area.areaId,
                    areaName: cage.area.areaName,
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
        fetch(`https://vietnamzoo.azurewebsites.net/api/Cage/${cage.cageId}`, {
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
        handleCloseDeleteModal();
        reloadState.setReload(!reloadState.reload);
    }
    let handleShowAnimal = () => {
        handleShowAnimalModal();
    }
    return ( 
        <tr>
            <td>{cage.area.areaName}{cage.cageId}</td>
            <td>
                <FormControl 
                type='text' 
                value={cageName}
                onChange={
                (e) => setCageName(e.target.value)} />
            </td>
            <td>
                <FormControl 
                type='text'
                disabled
                value={areaName} />
            </td>
            <td className="text-center">
                <Button variant="outline-success" size="sm" onClick={handleShowAnimal}>Animals</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-warning" size="sm" onClick={handleUpdate}><Image style={{ height: '1rem', width: '1rem' }} src={Update}></Image></Button>
            </td>
            <td className="text-center">
                <Button variant="outline-danger" size="sm" onClick={handleShowDeleteModal}><Image style={{ height: '1rem', width: '1rem' }} src={Delete}></Image></Button>
            </td>
            <ShowAnimalModal 
            show={showAnimalModal} 
            handleClose={handleCloseAnimalModal} 
            reloadState={reloadState}
            cage={cage} />
            <DeleteCageModal 
            show={showDeleteModal} 
            handleClose={handleCloseDeleteModal} 
            handleDelete={handleDelete} 
            cage={cage} />
        </tr>
     )
}
export default CageTableContent;