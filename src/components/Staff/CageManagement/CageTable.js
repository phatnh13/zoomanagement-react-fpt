import React from 'react';
import { Container, Table } from 'react-bootstrap';
import CageTableContent from './CageTableContent';

function CageTable({cageList}) {
    return (
        <Container>
            <div className="text-uppercase" >
                <h3>cages's managing table</h3>
            </div>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th>No.</th>
                        <th className="col-6">Cage Name</th>
                        <th className="col-3">Area Name</th>
                        <th className="col-1"></th>
                        <th className="col-1"></th>
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