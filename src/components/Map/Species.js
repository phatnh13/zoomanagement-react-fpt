import React, { useState } from "react";
import { Image, Card, Col, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';



const Species = () => {
    const location = useLocation();
    const [species] = useState(location.state.item);
    console.log(species, "Species");

    return (
        <>
            <div style={{ backgroundColor: '#F7F1DB', paddingTop: '13.75rem' }}>
                <Container fluid>
                    <Col md={6} className="g-container pb-5">
                        <header className="col-md-12 ce-header">
                            <h1 className="ce-headline-left" style={{ fontSize: '3.125rem', color: '#3c5724' }}>{species.speciesName}</h1>
                        </header>
                        <div className="rte">
                            <p className="big" style={{ fontSize: '1.375rem' }}><em>{species.family}</em></p>
                        </div>
                    </Col>
                    <Card className="g-container" style={{ backgroundColor: '#ebe1b5', border: 'none' }}>
                        <Card.Body className="d-flex">
                            <Col md={6}>
                                <Card.Text style={{ textAlign: 'left' }} >
                                    <p><strong>Information:</strong> {species.information}</p>
                                    <p><strong>Characteristic: </strong> {species.characteristic}</p>
                                    <p><strong>Allocation: </strong> {species.allocation}</p>
                                    <p><strong>Ecological: </strong> {species.ecological}</p>
                                    <p><strong>Diet: </strong> {species.diet}</p>
                                    <p><strong>Breeding and reproduction: </strong> {species.breedingAndReproduction}</p>
                                </Card.Text>
                            </Col>
                            <Col md={6} >
                                <center>
                                    <div>
                                        <Carousel >
                                            <Carousel.Item >
                                                <Image style={{ width: '460px', height: '503px' }} src={species.image} alt={species.speciesName} />
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </center>
                            </Col>
                        </Card.Body>
                    </Card>
                    <Col md={6} className="g-container">
                        <div className="">
                            <Link to="/map" className=" justify-content-start btn mb-3 mt-3  ">
                                Back to the overview {'>'}
                            </Link>
                        </div>
                    </Col>
                </Container>
            </div>
        </>
    );
};

export default Species;