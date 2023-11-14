import React, { useState, useEffect } from "react";
import { Image, Col, Row, Container } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import ZooMap from "../../assets/ZooMap.jpg";

const Map = () => {

    const [species, setSpecies] = useState([])
    const [searchString,] = useState('')
    const [searchBy,] = useState('speciesName')
    const [currentPage,] = useState(1);
    const [, setTotalPages] = useState(0);
    const navigate = useNavigate()

    const handleNavigation = (item) => {
        navigate(`/species`, { state: { item: item } })
    }

    const handleClick = (item) => {
        handleNavigation(item);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/Species/GetAllSpecies`, {
            method: "GET",
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        }).then(data => data.json())
            .then(data => {
                setSpecies(data);
            }).catch(error => console.log(error))

    }, [currentPage, searchBy, searchString]);

    return (
        <>
            <div style={{ backgroundColor: '#F7F1DB', paddingTop: '5rem' }}>
                <div className="text-center" >
                    <h1 style={{ fontSize: 150, fontFamily: "Just Another Hand", color: '#3c5724' }}>Saigon Zoo Map</h1>
                    <p style={{ marginTop: '2rem', fontSize: '2rem' }}>Want to know what awaits you? Check out the overview here for a taste of what to </p>
                    <p style={{ fontSize: '2rem' }}>expect on your visit to Saigon Zoo.</p>
                </div>
                <center><Image style={{ borderWidth: 60 }} src={ZooMap} alt="zoo-map" fluid ></Image></center>
                <div className="text-center" >
                    <h1 style={{ fontSize: '3.125rem', color: '#3c5724', paddingTop: '5rem' }}>ANIMALS</h1>
                    <p style={{ marginTop: '2rem', fontSize: '1.375rem' }}>Visit your favourite animals and discover previously unknown species – the </p>
                    <p style={{ fontSize: '1.375rem' }}>exciting world of Saigon Zoo never ceases to amaze!</p>
                </div>
                <Container fluid>
                    <Row xs={1} md={4} style={{ justifyContent: 'flex-start', padding: '2rem 16rem 2rem 16rem' }}>

                        {species?.map((item, idx) => {
                            return (
                                <Col key={idx}>
                                    <center>
                                        <Image onClick={() => handleClick(item)} roundedCircle fluid style={{ width: '148px', height: '148px', cursor: 'pointer' }} variant="top" src={item.image} />
                                        <div style={{ padding: '5px 5px 50px 5px ', justifyContent: 'start' }} onClick={() => handleClick(item)}>
                                            <Link className="text-uppercase" style={{ color: 'inherit', justifyContent: 'center', textDecoration: 'none', fontSize: '1rem', fontWeight: 'bolder' }}>{item.speciesName} </Link>
                                        </div>
                                    </center>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Map;