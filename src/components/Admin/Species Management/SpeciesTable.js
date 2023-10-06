import React from 'react';
import { Container, Table, Badge } from 'react-bootstrap';
import SpeciesTableContent from './SpeciesTableContent';

function SpeciesTable({speciesList}) {
    return ( 
        <Container>
            <div className="text-uppercase" >
                <h3>species's managing table <Badge size="sm" bg="secondary">5</Badge></h3>
            </div>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th>No.</th>
                        <th className="col-2">name</th>
                        <th className="col-6">description</th>
                        <th className="col-1">isDelete</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        {speciesList.map((control, index) => {
                            return <SpeciesTableContent key={index} index={index} species={control} />;
                        })}
                </tbody>
            </Table>
        </Container>
     )
}

export default SpeciesTable;