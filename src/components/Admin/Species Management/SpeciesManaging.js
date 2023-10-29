import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Form, Button,Pagination } from 'react-bootstrap';
import SpeciesTable from './SpeciesTable';

function SpeciesManaging() {
    const [species, setSpecies] = useState(
        [
            {
                "id": 1,
                "name": "Cat",
                "description": "A cat is a small, usually furry, domesticated, carnivorous mammal.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            },
            {
                "id": 2,
                "name": "Dog",
                "description": "A cat is a small, usually furry, domesticated, carnivorous mammal.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            },
            {
                "id": 3,
                "name": "Bird",
                "description": "A cat is a small, usually furry, domesticated, carnivorous mammal.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            },
            
        ]
        ); 

    useEffect(() => {
        fetch(`https://localhost:7193/api/Species/GetAllSpecies`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + localStorage.getItem("token")
            },
        })
            .then((res) => res.json())
            .then(data => {
                setSpecies(data);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, []);

    return (
        <Container fluid>
            <Row className="vh-20 d-flex justify-content-center align-items-center m-3 pb-1 border-bottom">
                {/*Start add button*/}
                <Col>
                    <div className="mb-3 d-grid">
                        <Button href='/admin/species/add' variant="outline-primary" size="sm">Add new Species</Button>
                    </div>
                </Col>
                {/*End add button*/}
            </Row>
            <Row>
                <Col>
                    {/*Start Table*/}
                    <SpeciesTable speciesList={species} />
                    {/*Start Table*/}
                </Col>
            </Row>
        </Container>
    )
}

export default SpeciesManaging;