import React, { useEffect, useState } from "react";
import { Image, Card, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';



const Species = () => {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        fetch(`https://localhost:7193/api/Species/GetAllSpecies`, {
            method: "GET",
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        }).then(data => data.json())
            .then(data => {
                console.log(data)
                setSpecies(data);
            }).catch(error => console.log(error))
    }, []);

    return (
        <>
            <div style={{ backgroundColor: '#F7F1DB', paddingBottom: '2rem' }}>
                {species.map((item, idx) => {
                    return (
                        <Accordion className="mt-5 " key={idx}>
                            <Accordion.Item style={{ margin: '3rem 7rem 0 7rem' }} eventKey="0" >
                                <Accordion.Header >{item.speciesName}</Accordion.Header>
                                <Accordion.Body >
                                    <Card style={{border: 'none'}}>
                                        <Card.Body className="d-flex">
                                            <Col md={6} className="mb-2">
                                                <center>
                                                    <div>
                                                        <Carousel fade fluid>
                                                            <Carousel.Item >
                                                                <Image src={item.image} alt={item.speciesName} />
                                                            </Carousel.Item>
                                                        </Carousel>
                                                    </div>
                                                </center>
                                            </Col>
                                            <Col md={6}>
                                                <Card.Text  >
                                                    <p><strong>Family: </strong> {item.family}</p>
                                                    <p><strong>Information:</strong> {item.information}</p>
                                                    <p><strong>Characteristic: </strong> {item.characteristic}</p>
                                                    <p><strong>Allocation: </strong> {item.allocation}</p>
                                                    <p><strong>Ecological: </strong> {item.ecological}</p>
                                                    <p><strong>Diet: </strong> {item.diet}</p>
                                                    <p><strong>Breeding and reproduction: </strong> {item.breedingAndReproduction}</p>
                                                </Card.Text>
                                            </Col>
                                        </Card.Body>
                                    </Card>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                })}
            </div>
        </>
    );
};

export default Species;