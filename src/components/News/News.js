import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./News.css";
import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const News = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`https://localhost:7193/api/News`)
            .then(response => response.json())
            .then(data => setNews(data.item));
    }, []);


    return (
        <>
            {news.map((item, idx) => {
                return (
                    <Container>
                        <Col md={4} key={idx}>
                            <div className="g-container">
                                <div className="g-void">
                                    <section className="ce list frame frame-default frame-type-list frame-layout-0 list-type-news_pi1">
                                        <div className="g-col-12 g-col-sm-12 g-col-md-12 g-col-lg-12 g-col-xl-12">
                                            <div className="g-col-12 g-col-sm-12 g-col-md-12 g-col-lg-12 g-col-xl-12">
                                                <div className="{item.Content}" itemScope="itemscope" itemType="http://schema.org/{item.Content}">
                                                    <div className="g-void">
                                                        <div className="g-col-12 g-col-sm-12 g-col-md-8 g-off-md-2 g-col-lg-8 g-off-lg-2 g-col-xl-8 g-off-xl-2">
                                                            <div class=" news-details__meta">
                                                                {/* <!-- date --> */}
                                                                <span class="news-list-date">
                                                                    <time itemprop="datePublished" datetime="2023-08-31">
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
                                                                <p>{item.Content}</p>
                                                                <p>{item.Content}</p>
                                                                <p>{item.Content}</p>
                                                                <p>
                                                                    <strong>{item.Content}</strong>
                                                                    <ul>
                                                                        <li>{item.Content}</li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li>{item.Content}</li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li>{item.Content}</li>
                                                                    </ul>
                                                                </p>
                                                            </div>
                                                            <div className="g-col-12 g-col-sm-12 g-col-md-8 g-off-md-2 g-col-lg-8 g-off-lg-2 g-col-xl-8 g-off-xl-2 u-break-grid__nested-container"></div>
                                                            <div className="g-col-12 g-col-sm-12 g-col-md-8 g-off-md-2 g-col-lg-8 g-off-lg-2 g-col-xl-8 g-off-xl-2"></div>
                                                            <div className="news-details__spacer"></div>
                                                            {/* link back */}
                                                            <div>
                                                                <Link to="/allnews" className="btn btn--arrow iconfont--link-arrow iconfont__after ">
                                                                    Back {'>'}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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