import React from "react";
import { Button } from "react-bootstrap";

function SpeciesTableContent({species, index}) {
    return ( 
        <tr>
            <td>{index+1}</td>
            <td>{species.name}</td>
            <td>{species.description}</td>
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

export default SpeciesTableContent;