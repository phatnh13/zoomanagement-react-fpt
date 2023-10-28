import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./News.css";
import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const News = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`https://localhost:7193/api/News`, {
            method: "GET",
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
            .then(data => setNews(data.item))
            .catch(error => { console.log(error);
            });
    }, []);


    return (
        <>
            {news.map((item, idx) => {
                return (
                    <Container className='vh-100'>
                        <Col md={4} key={idx}>
                            <div className="g-container">
                                <div className="g-void">
                                    <section className="ce list frame frame-default frame-type-list frame-layout-0 list-type-news_pi1">
                                        <Col>
                                            <Col >
                                                <div className="{item.Content}" itemScope="itemscope" itemType="http://schema.org/{item.Content}">
                                                    <div className="g-void">
                                                        <Col>
                                                            <div class=" news-details__meta">
                                                                {/* <!-- date --> */}
                                                                <span class="news-list-date">
                                                                    <time itemprop="datePublished" datetime={item.releaseDate}>
                                                                        {item.releaseDate}
                                                                    </time>
                                                                </span>
                                                                {/* <!-- categories --> */}
                                                                <span class="news-list-category">{item.CategoryId}</span>
                                                            </div>
                                                            <div className="col-md-12 text-left">
                                                                <h1 className="main-heading">{item.Title}</h1>
                                                                <p>{item.Author}</p>
                                                            </div>
                                                            <div className="witdh">
                                                                <Carousel >
                                                                    <Carousel.Item>
                                                                        <img src={item.image} alt="Pic1"></img>
                                                                    </Carousel.Item>
                                                                    <Carousel.Item>
                                                                        <img src={item.image} alt="Pic2"></img>
                                                                    </Carousel.Item>
                                                                    <Carousel.Item>
                                                                        <img src={item.image} alt="Pic3"></img>
                                                                    </Carousel.Item>
                                                                    <Carousel.Item>
                                                                        <img src={item.image} alt="Pic4"></img>
                                                                    </Carousel.Item>
                                                                </Carousel>
                                                            </div>
                                                            <div className="col-md-12 text-left">
                                                                <p>{item.Content}</p>
                                                            </div>
                                                            {/* link back */}
                                                            <div>
                                                                <Link to="/allnews" className="btn btn--arrow iconfont--link-arrow iconfont__after ">
                                                                    Back {'>'}
                                                                </Link>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Col>
                                    </section>
                                </div>
                            </div>
                        </Col>
                    </Container>
                )
            })}
        </>
    );
};

export default News;