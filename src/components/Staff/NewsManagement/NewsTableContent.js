import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { DateHelper } from "../../DateHelper";
import { useNavigate } from "react-router-dom";
import HideNewsModal from "./Modal/HideNewsModal";
import Update from "../../../assets/edit.png";
import Show from "../../../assets/view.png";
import ViewNews from "../../../assets/view_news.png";
import HideNews from "../../../assets/hide.png";
function NewsTableContent({ news, reloadState }) {
    //Modal
    const [showHideNews, setShowHideNews] = useState(false);
    const handleCloseHideNews = () => setShowHideNews(false);
    const handleShowHideNews = () => setShowHideNews(true);
    const [isItemVisible, setItemVisible] = useState(true);
    const navigate = useNavigate();



    let handleView = () => {
        navigate(`/staff/news/view/${news.newsId}`, { state: news });
    }

    let handleUpdate = () => {
        navigate(`/staff/news/update/`, { state: news });
    }

    let handleHideNews = () => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/News/${news.newsId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) => {
                if (res.ok) {
                    alert("The news has been hidden");
                    reloadState.setReload(!reloadState.reload);
                    setItemVisible(!isItemVisible);
                    handleCloseHideNews();
                } else {
                    alert("The news has already hidden!");
                }
            })
            .catch((error) => console.log(error));
    };
    let handleShowNews = () => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/News/active-news?NewsId=${news.newsId}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
            body: JSON.stringify({
                "isActive": true
            })
        })
            .then((res) => {
                if (res.ok) {
                    alert("Update successfully");
                    reloadState.setReload(!reloadState.reload);
                } else {
                    alert("Update failed");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <tr>
            <td>{news.title}</td>
            <td>{news.author}</td>
            <td>{news.newsCategories.categoryName}</td>
            <td>{DateHelper.formatDate(news.releaseDate)}</td>
            <td>
                <div className="d-grid">
                    <Button variant="outline-info" size="sm" onClick={handleView}><Image style={{ height: '1rem', width: '1rem' }} src={ViewNews}></Image></Button>
                </div>
            </td>
            <td>
                <div className="d-grid">
                    <Button variant="outline-warning" size="sm" onClick={handleUpdate}><Image style={{ height: '1rem', width: '1rem' }} src={Update}></Image></Button>
                </div>
            </td>
            <td>
                <div className="d-grid">
                    <Button variant="outline-secondary" size="sm" onClick={handleShowHideNews}><Image style={{ height: '1rem', width: '1rem' }} src={HideNews}></Image></Button>
                </div>
            </td>
            <td>
                <div className="d-grid">
                    <Button variant="outline-success" size="sm" onClick={handleShowNews} ><Image style={{ height: '1rem', width: '1rem' }} src={Show}></Image></Button>
                </div>
            </td>
            <HideNewsModal
                show={showHideNews}
                handleClose={handleCloseHideNews}
                handleHideNews={handleHideNews}
                news={news} />
        </tr>
    )
}

export default NewsTableContent;