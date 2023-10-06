import React from 'react';
import { Button } from 'react-bootstrap';

function CageTableContent({index, cage}) {
    return ( 
        <tr>
            <td>{index+1}</td>
            <td>{cage.name}</td>
            <td>{cage.areaName}</td>
            <td>False</td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm">Update</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm">Delete</Button>
            </td>
        </tr>
     )
}

export default CageTableContent