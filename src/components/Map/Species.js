import React, { useEffect, useState } from "react";
import { Image, Card, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import WhiteRhinoceros from '../../assets/te-giac-31.jpg';
import WhiteRhinoceros2 from '../../assets/te-giac-21.jpg';
import GreaterKudu from '../../assets/linh-duong-sung-xoan2.jpg';
import GreaterKudu2 from '../../assets/linh-duong-sung-xoan-22.jpg';
import Gemsbok from '../../assets/gemsbok-1.jpg';
import Gemsbok2 from '../../assets/gemsbok-2.jpg';
import BlueWildebeest from '../../assets/linh-duong-dau-bo1.jpg';
import BlueWildebeest2 from '../../assets/linh-duong-dau-bo2.jpg';
import SquirrelMonkey from '../../assets/khi-soc-41.jpg';
import SquirrelMonkey2 from '../../assets/khi-soc-22.jpg';
import Giraffe from '../../assets/huou-cao-co-42.jpg';
import Giraffe2 from '../../assets/huou-cao-co-22.jpg';
import Hippo from '../../assets/ha-ma2.jpg';
import Hippo2 from '../../assets/ha-ma.jpg';
import ScarletIbis from '../../assets/co-do-21.jpg';
import ScarletIbis2 from '../../assets/co-do-11.jpg';


const Species = () => {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/species');
                const responseData = await response.json();
                setSpecies(responseData);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchSpecies();
    }, [])

    return (
        <>
            <Accordion style={{
                alignItems: "center",
                marginTop: '4rem',
                marginLeft: '7rem',
                marginRight: '7rem',
                marginBottom: '3rem'
            }} className="md-auto" defaultActiveKey={['0']} fluid>
                {species.map((species, idx) => {
                    return (
                        <Accordion.Item eventKey="0" key={idx}>
                            <Accordion.Header>{species.speciesName}</Accordion.Header>
                            <Accordion.Body className="vc_tta-panel-body" >
                                <Card className="vc_row wpb_row vc_inner row">
                                    <Card.Body className="d-flex">
                                        <Col md={6} className="mb-2">
                                            <center>
                                                <div>
                                                    <Carousel fade>
                                                        <Carousel.Item interval={1000}>
                                                            <Image src={species.image} alt={species.speciesName} />
                                                        </Carousel.Item>
                                                        <Carousel.Item>
                                                            <Image style={{ width: 500 }} src={species.image} alt={species.speciesName} />
                                                        </Carousel.Item>
                                                    </Carousel>
                                                </div>
                                            </center>
                                        </Col>
                                        <Col className="col-md-6">
                                            <Card.Text  >
                                                <p><strong>Family: </strong> {species.family}</p>
                                                <p><strong>Information:</strong> {species.infomation}</p>
                                                <p><strong>Characteristic: </strong> {species.characteristic}</p>
                                                <p><strong>Allocation: </strong> {species.allocation}</p>
                                                <p><strong>Ecological: </strong> {species.ecological}</p>
                                                <p><strong>Diet: </strong> {species.diet}</p>
                                                <p><strong>Breeding and reproduction: </strong> {species.breedingAndReproduction}</p>
                                            </Card.Text>
                                        </Col>
                                    </Card.Body>
                                </Card>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>

        </>
    );
};

export default Species;