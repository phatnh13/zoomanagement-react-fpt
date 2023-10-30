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
                                <div newsScope="newsscope">
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
                                                <h1 className="main-heading mb-5">{news.title}</h1>
                                            </div>
                                            
                                                <Carousel >
                                                    <Carousel.Item>
                                                        <Image fluid src={news.image} alt="Pic1"></Image>
                                                    </Carousel.Item>
                                                </Carousel>
                                            <div className=" col-md-12 text-left mt-4">
                                                <p>{news.content}</p>
                                            </div>
                                            {/* link back */}
                                            <hr></hr>
                                            <div>
                                                <Link to="/zoo-news" className="text-align-end btn mb-3  ">
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