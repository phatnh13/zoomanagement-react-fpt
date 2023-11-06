import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import LionVideo from "../../../assets/Lion-Video.mp4"
import "./WelcomeMap.css"

const WelcomeMap = () => {
    return (
        <>
            <Container className="welcome-map d-flex justify-content-center">
                <Card className='welcome-map__card d-flex'>
                <video className='card__video-lion' src={LionVideo} alt="lions" playsinline autoPlay loop muted poster />
                            <Card.Body className='card__video-text'>
                                <Card.Title style={{
                                    color: '#3C5724',
                                    fontfamily: 'Nunito Sans',
                                    fontWeight: 'bold'

                                }}>We are passionate about
                                    protecting species.</Card.Title>
                                <Card.Text style={{
                                    color: 'black',
                                    fontfamily: 'Nunito Sans',
                                }} >
                                    Over a million species worldwide are threatened with
                                    extinction. Saigon Zoo is committed to protecting
                                    animals and habitats around the world via its Saigon
                                    World Wild conservation programme.
                                </Card.Text>
                                <Button style={{
                                    alignContent: 'left',
                                    fontWeight: 'bold',
                                }} variant="success"><Link className="link-underline-hover" style={{ color: 'white', textDecoration: 'none' }} to='Map'>Saigon World Wild</Link></Button>
                            </Card.Body>
                            </Card>
            </Container >
        </>
    );
}

export default WelcomeMap;