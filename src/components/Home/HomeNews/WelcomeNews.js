import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom"
import Pan from '../../../assets/Pan.png';
import Monke from '../../../assets/Monke.png';
import Zebras from '../../../assets/Zebras.png';
import './WelcomeNews.css';



const WelcomeNews = () => {
    return (
        <>
                    <Container className='pb-5'>
                    <div className="news">
                    <div className="news-grid-slider__header-wrap">
                        <h2 className=" news-grid-slider__header">News</h2>
                        <Link className="justify-content-end btn-home-news btn--light news-grid-slider__all-news-link" to="/zoo-news">All News</Link>
                    </div>
                    </div>
                        <Row className="justify-content-center">
                            <Col md={4} >
                                <Link to='news'>
                                    <CardImg className="news-grid__image" src={Pan} alt="Panda" />
                                </Link>
                                <Card.Text>Saigon Zoo’s panda twins celebrate their fourth birthday</Card.Text>
                            </Col>
                            <Col md={4}  >
                                <Link to='news'>
                                    <CardImg className="news-grid__image" src={Monke} alt="monke" />
                                </Link>
                                <Card.Text>Nocturnal animal house welcomes rare new arrivals</Card.Text>
                            </Col>
                            <Col md={4}  >
                                <Link to='news'>
                                    <CardImg className="news-grid__image" src={Zebras} alt="zebras" />
                                </Link>
                                <Card.Text>Our young white-lipped peccaries are keeping the rest of the group on their toes. The babies, the youngest of whom were born about a month ago, spend their days…</Card.Text>
                            </Col>
                        </Row>
                    </Container>
        </>
    );
}

export default WelcomeNews;