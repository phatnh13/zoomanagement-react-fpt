import React from "react";
import { Container, Image, Card, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { DateHelper } from "../../DateHelper";

function ViewNews() {
    const location = useLocation();
    const news = location.state;
    return (
        <Container className=" col-md-6 mt-5">
            <Card>
                <Card.Body>
                    <Card.Text>
                        <Card.Title>{news.title}</Card.Title>
                        <p><strong>Author: </strong>{news.author} | <strong>Release Date:</strong> <span className="text-danger">{DateHelper.formatDate(news.releaseDate)}</span></p>
                        <hr/>
                        <p><strong>Category:</strong> <span className="text-warning">{news.newsCategories.categoryName}</span></p>
                        <hr/>
                        <p>{news.content}</p>
                        <Image fluid src={news.image} alt="Pic1"></Image>
                    </Card.Text>
                    <Link to="/staff/news" className="text-align-end btn m-auto border "> {'<'} Back</Link>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default ViewNews;