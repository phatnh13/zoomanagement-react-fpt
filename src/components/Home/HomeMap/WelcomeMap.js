import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Col, Row } from "react-bootstrap";
import Lions from '../../../assets/Lions.png';

const WelcomeMap = () => {
    return (
        <>
            <Row className="justify-content-md-center mt-4">
                <Col md={8}>
                    <Card  style={{
                        top: '40px',
                        borderRadius: '100px',
                        flexShrink: 0,
                    }} >
                        <Card.Img style={{ width: '100%' }} src={Lions} alt="lions" />
                        <Card.ImgOverlay>
                            <Card.Body style={{position: 'relative'}}  >
                                <Card.Title style={{
                                    color: '#3C5724',
                                    fontfamily: 'Nunito Sans',
                                    width: '30%',

                                }}>We are passionate about
                                    protecting species.</Card.Title>
                                <Card.Text style={{
                                    color: 'white',
                                    fontfamily: 'Nunito Sans',
                                    width: '30%',
                                }} >
                                    Over a million species worldwide are threatened with
                                    extinction. Saigon Zoo is committed to protecting
                                    animals and habitats around the world via its Saigon
                                    World Wild conservation programme.
                                </Card.Text>
                                <Button style={{
                                    alignContent: 'left',
                                    marginLeft: '5rem',
                                }} variant="success" href='Map' >Saigon World Wild </Button>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row >
        </>
    );
}

export default WelcomeMap;