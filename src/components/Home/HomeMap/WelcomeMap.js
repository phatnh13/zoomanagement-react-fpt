import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Col, Row } from "react-bootstrap";
import Lions from '../../../assets/Lions.png';

const WelcomeMap = () => {
    return (
        <>
            <Row className="justify-content-md-center ">
                <Col md={8}>
                    <Card style={{
                        top: '40px',
                        width: '1160px',
                        height: '418px',
                        borderRadius: '100px',
                        flexShrink: 0,

                    }} >
                        <Card.Img style={{ position: 'relative' }} src={Lions} alt="lions" />
                        <Card.ImgOverlay style={{ width: '18rem' }}>
                            <Card.Body style={{
                                position: 'absolute',
                                width: '353px',
                                height: '226px',
                                top: '30px',
                                left: '700px',
                                borderradius: '20px',
                                opacity: '0.2px'
                            }}>
                                <Card.Title style={{
                                    width: '240px',
                                    height: '54px',
                                    color: '#3C5724',
                                    textAlign: 'right',
                                    fontfamily: 'Nunito Sans',
                                    fontsize: '20px',
                                    fontstyle: 'normal',
                                    fontweight: 700,
                                    lineheight: 'normal'
                                }}>We are passionate about
                                    protecting species.</Card.Title>
                                <Card.Text style={{
                                    color: 'white',
                                    fontfamily: 'Nunito Sans',
                                    fontstyle: 'normal',
                                    fontweight: 700,
                                    lineheight: 'normal'
                                }} >
                                    Over a million species worldwide are threatened with
                                    extinction. Saigon Zoo is committed to protecting
                                    animals and habitats around the world via its Saigon
                                    World Wild conservation programme.
                                </Card.Text>
                                <Button style={{
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