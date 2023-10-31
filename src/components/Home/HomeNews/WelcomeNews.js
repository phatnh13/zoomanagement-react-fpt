import React, { useState, useEffect } from "react";
import { Card, CardImg, Col, Container, Row, Pagination } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"
import './WelcomeNews.css';



const WelcomeNews = () => {
    const [news, setNews] = useState([])

    const navigate = useNavigate()

    const handleNavigation = (item) => {
        console.log("Navigarun");
        navigate(`/news`, { state: { item: item } })
    }


    const handleClick = (item) => {
        console.log(item)
        handleNavigation(item);
    }

    useEffect(() => {
        fetch(`https://localhost:7193/api/News/get-top-news`, {
            method: "GET",
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        }).then(data => data.json())
            .then(data => {
                console.log(data)
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
                                <Card style={{border: 'none'}} onClick={() => handleClick(item)}>
                                    <Card.Img variant="top" src={item.thumnail} />
                                    <Card.Body style={{backgroundColor: '#F7F1DB'}}>
                                        <Card.Title style={{fontSize: '1rem'}}>{item.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
                {/* <Row className="justify-content-center">
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
                </Row> */}
            </Container >
        </>
    );
}

export default WelcomeNews;