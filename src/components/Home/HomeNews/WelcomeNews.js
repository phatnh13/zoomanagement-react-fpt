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
                    <Container>
                    <div className="news">
                    <div class="news-grid-slider__header-wrap">
                        <h2 class=" news-grid-slider__header ms-5">News</h2>
                        <Link class="justify-content-end btn-home-news btn--light news-grid-slider__all-news-link me-5" to="/zoo-news">All News</Link>
                    </div>
                    </div>
                        <Row className="justify-content-center">
                            <Col md={3} >
                                <Link to='news'>
                                    <CardImg src={Pan} alt="Panda" />
                                </Link>
                                <Card.Text>Saigon Zoo’s panda twins celebrate their fourth birthday</Card.Text>
                            </Col>
                            <Col md={3}  >
                                <Link to='news'>
                                    <CardImg src={Monke} alt="monke" />
                                </Link>
                                <Card.Text>Nocturnal animal house welcomes rare new arrivals</Card.Text>
                            </Col>
                            <Col md={3}  >
                                <Link to='news'>
                                    <CardImg src={Zebras} alt="zebras" />
                                </Link>
                                <Card.Text>Our young white-lipped peccaries are keeping the rest of the group on their toes. The babies, the youngest of whom were born about a month ago, spend their days…</Card.Text>
                            </Col>
                        </Row>
                    </Container>
        </>
    );
}

export default WelcomeNews;