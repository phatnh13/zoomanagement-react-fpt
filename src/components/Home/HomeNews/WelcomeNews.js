import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"
import './WelcomeNews.css';



const WelcomeNews = () => {
    const [news, setNews] = useState([])

    const navigate = useNavigate()

    const handleNavigation = (item) => {
        navigate(`/news`, { state: { item: item } })
    }


    const handleClick = (item) => {
        handleNavigation(item);
    }

    useEffect(() => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/News/get-top-news`, {
            method: "GET",
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        }).then(data => data.json())
            .then(data => {
                setNews(data);
            }).catch(error => console.log(error))

    }, []);


    return (
        <>
            <Container className='pb-5'>
                <div className="news">
                    <div className="news-grid-slider__header-wrap">
                        <h2 className=" news-grid-slider__header">News</h2>
                        <Link className="justify-content-end btn-home-news btn--light news-grid-slider__all-news-link" to="/zoo-news">All News</Link>
                    </div>
                </div>
                <Row md={3}>
                    {news.map((item, idx) => {
                        return (
                            <Col key={idx} >
                                <Card style={{ border: 'none', borderRadius: '50px', cursor: 'pointer' }} onClick={() => handleClick(item)}>
                                    <Card.Img  style={{height: '197.52px', width: 'auto'}} src={item.thumnail} />
                                    <Card.Body style={{ backgroundColor: '#F7F1DB' }}>
                                        <Card.Title style={{ fontSize: '1rem' }}>{item.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container >
        </>
    );
}

export default WelcomeNews