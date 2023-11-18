import React, { useState, useEffect } from 'react';
import "./News.css";
import { Container, Image, Row, Col, Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DateHelper } from '../DateHelper';

const News = () => {
    const location = useLocation();
    const [categoryId, setCategoryId] = useState(location.state.item.newsCategories.categoryId);
    const [news] = useState(location.state.item);
    const [relativeNews, setRelativeNews] = useState([])
    const navigate = useNavigate()

    const handleNavigation = (item) => {
        navigate(`/news`, { state: { item: item } })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const handleClick = (item) => {
        window.location.reload();
        window.scrollTo(0, 0);
        handleNavigation(item);
    }

    useEffect(() => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/News/get-relative-news?CategoryId=${categoryId}`, {
            method: "GET",
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        }).then(data => data.json())
            .then(data => {
                setRelativeNews(data);
            }).catch(error => console.log(error))

    }, [categoryId]);

    const onMouseEnter = (e) => {
        e.target.style.color = '#CCCCCC';
        e.target.style.border = '2px solid green';
        e.target.style.transition = '0.2s';
        e.target.style.transitionTimingFunction = 'ease-in-out';
        e.target.style.transitionDelay = '0.1s';
        e.target.style.shadow = '5px 5px 10px #000003';
    }
    const onMouseLeave = (e) => {
        e.target.style.color = 'black';
        e.target.style.border = '2px solid black';
    }
    return (
        <>
            {/* {console.log(newsId)} */}
            <div style={{ backgroundColor: '#F7F1DB', paddingTop: '10rem' }}>
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            <div className=" g-container">
                                <div className="">
                                    <section className="ce list frame frame-default frame-type-list frame-layout-0 list-type-news_pi1">
                                        <div newsScope="newsscope">
                                            <Container className="g-void">
                                                <Row>
                                                    <div class=" news-details__meta">
                                                        {/* <!-- date --> */}
                                                        <span class="news-list-date">
                                                            <time>
                                                                {DateHelper.formatDate(news.releaseDate)}
                                                            </time>
                                                        </span>
                                                        {/* <!-- categories --> */}
                                                        <span class="news-list-category">{news.newsCategories.categoryName}</span>
                                                    </div>
                                                    <div className=" text-left">
                                                        <h1 className="main-heading mb-5">{news.title}</h1>
                                                    </div>
                                                    <Image fluid src={news.image} alt="Pic1"></Image>
                                                    <div className="col-md-12 text-left mt-4">
                                                        <p>{news.content}</p>
                                                    </div>

                                                </Row>
                                            </Container>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <Row>
                                <h3 className="main-heading ">Relative News</h3>
                            </Row>
                            {relativeNews.map((item, idx) => {
                                return (
                                    <Col key={idx} >
                                        <hr></hr>
                                        <Card style={{ border: 'none', borderRadius: '50px', cursor: 'pointer' }} onClick={() => handleClick(item)}>
                                            <Card.Img style={{ height: '197.52px' }} src={item.thumnail} />
                                            <Card.Body style={{ backgroundColor: '#F7F1DB' }}>
                                                <Card.Title style={{ fontSize: '1rem' }}>{item.title}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Col>
                    </Row>
                    <hr></hr>
                    <div>
                        <Link
                            to="/zoo-news"
                            className=" justify-content-start text-align-end btn mb-3 border"
                            onMouseEnter={(e) => onMouseEnter(e)}
                            onMouseLeave={(e) => onMouseLeave(e)}
                        >
                            &#60; Back
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default News;