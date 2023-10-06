import React from 'react';
import { Container, Table, Badge } from 'react-bootstrap';
import CageTableContent from './CageTableContent';

function CageTable({cageList}) {
    return (
        <Container>
            <div className="text-uppercase" >
                <h3>cages's managing table <Badge size="sm" bg="secondary">5</Badge></h3>
            </div>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th>No.</th>
                        <th className="col-2">name</th>
                        <th className="col-6">areaName</th>
                        <th className="col-1">isDelete</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        {cageList.map((control, index) => {
                            return <CageTableContent key={index} index={index} cage={control} />;
                        })}
                </tbody>
            </Table>
        </Container>
    );
}

export default CageTable;