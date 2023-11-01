import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { DateHelper } from "../../DateHelper";
import { useNavigate } from "react-router-dom";
import DeleteNewsModal from "./Modal/DeleteNewsModal";
function NewsTableContent({news}) {
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
        fetch(`https://localhost:7193/api/News/${news.newsId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => {
                if (res.ok) {
                    alert("Delete successfully");
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
                    <Button variant="outline-success" size="sm" onClick={handleView}>View</Button>
                </div>
            </td>
            <td>
                <div className="d-grid">
                    <Button variant="outline-primary" size="sm" onClick={handleUpdate}>Update</Button>
                </div>
            </td>
            <td>
                <div className="d-grid">
                    <Button variant="outline-danger" size="sm" onClick={handleShowDelete}>Delete</Button>
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