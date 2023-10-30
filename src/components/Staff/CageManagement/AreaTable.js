import React from 'react';
import { Container, Table } from 'react-bootstrap';
import AreaTableContent from './AreaTableContent';

function AreaTable({areaList, reloadState}) {
    return (
        <Container>
            <h5 className='text-uppercase'>Areas</h5>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th className="col-1">Area ID</th>
                        <th className="col-5">Area Name</th>
                        <th className="col-3"></th>
                        <th className="col-3"></th>
                    </tr>
                </thead>
                <tbody>
                        {areaList.map((control, index) => {
                            return <AreaTableContent key={index} index={index} reloadState={reloadState} area={control} />;
                        })}
                </tbody>
            </Table>
        </Container>
    );
}

export default AreaTable;