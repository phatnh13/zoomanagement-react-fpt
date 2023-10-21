import React from "react";
import { CardImg, Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Pan from '../../../assets/Pan.png';
import Monke from '../../../assets/Monke.png';
import Zebras from '../../../assets/Zebras.png';
import './WelcomeNews.css';



const WelcomeNews = () => {
    return (
        <>
            <div className="g-col-12 g-col-sm-12 g-col-md-12 g-col-lg-12 g-col-xl-12">
                <div className="news">
                    <div class="news-grid-slider__header-wrap">
                        <h2 class=" news-grid-slider__header">News</h2>
                        <a class="justify-content-end btn-home-news btn--light news-grid-slider__all-news-link" href="/allnews">all News
                        </a>
                    </div>
                    <Container>
                        <Row style={{ width: '100%' }} className="justify-content-center">
                            <Col md={3} style={{ width: '25rem' }} >
                                <CardImg src={Pan} alt="Panda" />
                                <Card.Text>Saigon Zoo’s panda twins celebrate their fourth birthday</Card.Text>
                            </Col>
                            <Col md={3} style={{ width: '25rem' }} >
                                <CardImg src={Monke} alt="monke" />
                                <Card.Text>Nocturnal animal house welcomes rare new arrivals</Card.Text>
                            </Col>
                            <Col md={3} style={{ width: '25rem' }} >
                                <CardImg src={Zebras} alt="zebras" />
                                <Card.Text>Our young white-lipped peccaries are keeping the rest of the group on their toes. The babies, the youngest of whom were born about a month ago, spend their days…</Card.Text>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default WelcomeNews;