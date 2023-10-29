import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./News.css";
import { Container, Image, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { DateHelper } from '../DateHelper';

const News = () => {
    const location = useLocation();
    const [news, setNews] = useState(location.state.item);
    console.log(news, "News");
    return (
        <>
            {/* {console.log(newsId)} */}
            <div style={{ backgroundColor: '#F7F1DB', paddingTop: '10rem' }}>
                <Container className=" col-md-6 ">
                    <div className=" g-container">
                        <div className="">
                            <section className="ce list frame frame-default frame-type-list frame-layout-0 list-type-news_pi1">
                                <div newsScope="newsscope" newsType="http://schema.org/{news.Content}">
                                    <div className="g-void">
                                        <Row>
                                            <div class=" news-details__meta">
                                                {/* <!-- date --> */}
                                                <span class="news-list-date">
                                                    <time>
                                                        {DateHelper.formatDate(news.releaseDate)}
                                                    </time>
                                                </span>
                                                {/* <!-- categories --> */}
                                                <span class="news-list-category">{news.author}</span>
                                            </div>
                                            <div className="col-md-12 text-center">
                                                <h1 className="main-heading">{news.title}</h1>
                                            </div>
                                            <div className="witdh">
                                                <Carousel >
                                                    <Carousel.Item>
                                                        <Image src={news.image} alt="Pic1"></Image>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <Image src={news.image} alt="Pic2"></Image>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <Image src={news.image} alt="Pic3"></Image>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <Image src={news.image} alt="Pic4"></Image>
                                                    </Carousel.Item>
                                                </Carousel>
                                            </div>
                                            <div className="vh-100 col-md-12 text-left">
                                                <p>{news.content}</p>
                                            </div>
                                            {/* link back */}
                                            <hr></hr>
                                            <div>
                                                <Link to="/allnews" className="btn btn--arrow mb-3 ">
                                                    Back {'>'}
                                                </Link>
                                            </div>
                                        </Row>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default News;