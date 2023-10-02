import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./News.css";
import WebLogo from "../../assets/WebLogo.png"
import PandaNews1 from "../../assets/PandaNews1.jpg";
import PandaNews2 from "../../assets/PandaNews2.jpg";
import PandaNews3 from "../../assets/PandaNews3.jpg";
import PandaNews4 from "../../assets/PandaNews4.jpg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const News = () => {
    return (
        <>
            <div className="background">
                <div className="header-img">
                    <div className="logo-box">
                        <div className="logo">
                            <div className="text-logo-top">VietNam Zoo</div>
                            <div className="text-logo-down">Since 1864</div>
                            <img className="web-logo" alt="WebLogo" src={WebLogo} />
                        </div>
                    </div>
                </div>
                <Container >
                    <div className="g-container">
                        <div className="g-void">
                            <section className="ce list frame frame-default frame-type-list frame-layout-0 list-type-news_pi1">
                                <div className="g-col-12 g-col-sm-12 g-col-md-12 g-col-lg-12 g-col-xl-12">
                                    <div className="g-col-12 g-col-sm-12 g-col-md-12 g-col-lg-12 g-col-xl-12">
                                        <div className="article" itemScope="itemscope" itemType="http://schema.org/Article">
                                            <div className="g-void">
                                                <div className="g-col-12 g-col-sm-12 g-col-md-8 g-off-md-2 g-col-lg-8 g-off-lg-2 g-col-xl-8 g-off-xl-2">
                                                    <div class=" news-details__meta">
                                                        {/* <!-- date --> */}
                                                        <span class="news-list-date">
                                                            <time itemprop="datePublished" datetime="2023-08-31">
                                                                08/31/2023
                                                            </time>
                                                        </span>
                                                        {/* <!-- categories --> */}
                                                        <span class="news-list-category">Press release</span>
                                                    </div>
                                                    <div className="col-md-12 text-left">
                                                        <h1 className="main-heading">News title here</h1>
                                                        <p>Description</p>
                                                    </div>
                                                    <div className="witdh">
                                                        <Carousel >
                                                            <Carousel.Item>
                                                                <img src={PandaNews1} alt="Pic1"></img>
                                                            </Carousel.Item>
                                                            <Carousel.Item>
                                                                <img src={PandaNews2} alt="Pic2"></img>
                                                            </Carousel.Item>
                                                            <Carousel.Item>
                                                                <img src={PandaNews3} alt="Pic3"></img>
                                                            </Carousel.Item>
                                                            <Carousel.Item>
                                                                <img src={PandaNews4} alt="Pic4"></img>
                                                            </Carousel.Item>
                                                        </Carousel>
                                                    </div>
                                                    <div className="col-md-12 text-left">
                                                        <p>Article here</p>
                                                        <p>Article here</p>
                                                        <p>Article here</p>
                                                        <p>Article here</p>
                                                        <p>
                                                            <strong>Article here</strong>
                                                            <ul>
                                                                <li>Article</li>
                                                            </ul>
                                                            <ul>
                                                                <li>Article</li>
                                                            </ul>
                                                            <ul>
                                                                <li>Article</li>
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
                </Container>
            </div>
        </>
    );
};

export default News;