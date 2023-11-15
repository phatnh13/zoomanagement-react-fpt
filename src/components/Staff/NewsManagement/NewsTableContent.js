import React, {useState} from "react";
import { Button, Image } from "react-bootstrap";
import { DateHelper } from "../../DateHelper";
import { useNavigate } from "react-router-dom";
import DeleteNewsModal from "./Modal/DeleteNewsModal";
import Delete from "../../../assets/delete.png";
import Update from "../../../assets/edit.png";
import View from "../../../assets/view.png";
function NewsTableContent({news, reloadState}) {
    //Modal
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const navigate = useNavigate();
    let handleView = () => {
        navigate(`/staff/news/view/${news.newsId}`, {state: news});
    }
    let handleUpdate = () => {
        navigate(`/staff/news/update/`, {state: news});
    }
    let handleDelete = () => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/News/${news.newsId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => {
                if (res.ok) {
                    alert("Delete successfully");
                    reloadState.setReload(!reloadState.reload);
                    handleCloseDelete();
                } else {
                    alert("Delete failed");
                }
            })
            .catch((error) => console.log(error));
    }
    return ( 
        <tr>
            <td>{news.title}</td>
            <td>{news.author}</td>
            <td>{news.newsCategories.categoryName}</td>
            <td>{DateHelper.formatDate(news.releaseDate)}</td>
            <td>
                <div className="d-grid">
                    <Button variant="outline-success" size="sm" onClick={handleView}><Image style={{ height: '1rem', width: '1rem' }} src={View}></Image></Button>
                </div>
            </td>
            <td>
                <div className="d-grid">
                    <Button variant="outline-warning" size="sm" onClick={handleUpdate}><Image style={{ height: '1rem', width: '1rem' }} src={Update}></Image></Button>
                </div>
            </td>
            <td>
                <div className="d-grid">
                    <Button variant="outline-danger" size="sm" onClick={handleShowDelete}><Image style={{ height: '1rem', width: '1rem' }} src={Delete}></Image></Button>
                </div>
            </td>
            <DeleteNewsModal 
            show={showDelete} 
            handleClose={handleCloseDelete} 
            handleDelete={handleDelete} 
            news={news} />
        </tr>
     )
}

export default NewsTableContent;