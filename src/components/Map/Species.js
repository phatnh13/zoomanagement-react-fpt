import React, { useState, useEffect } from "react";
import { Image, Card, Col, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";



const Species = () => {
    const location = useLocation();
    const [species] = useState(location.state.item);

    const onMouseEnter = (e) => {
        e.target.style.transition = '0.3s';
        e.target.style.transitionTimingFunction = 'ease-in-out';
        e.target.style.border = '2px solid black';

    }
    const onMouseLeave = (e) => {
        e.target.style.color = 'black';
        e.target.style.border = '2px #CCCCCC';

    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <>
            <div className="vh-50" style={{ backgroundColor: '#F7F1DB', paddingTop: '10rem' }}>
                <Container fluid className="vh-50">
                    <Col md={6} className="g-container pb-5">
                        <header className="col-md-12 ce-header">
                            <h1 className="ce-headline-left text-uppercase" style={{ fontSize: '3.125rem', color: '#3c5724' }}>{species.speciesName}</h1>
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
                                        <Image style={{ width: '460px', height: '503px' }} src={species.image} alt={species.speciesName} />
                                    </div>
                                </center>
                            </Col>
                        </Card.Body>
                    </Card>
                    <Col md={6} className="g-container pb-3">
                        <div className="">
                            <Link to="/map" className="justify-content-start btn mb-3 mt-4"
                                onMouseEnter={(e) => onMouseEnter(e)}
                                onMouseLeave={(e) => onMouseLeave(e)}
                            >
                                Back to the overview &#62;

                            </Link>
                        </div>
                    </Col>
                </Container>
            </div>
        </>
    );
};

export default Species;