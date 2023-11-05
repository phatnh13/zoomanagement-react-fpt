import React from 'react';
import { Accordion } from 'react-bootstrap';
import SpeciesTableContent from './SpeciesTableContent';

function SpeciesTable({speciesList, reloadState}) {
    return ( 
        <Accordion className="md-auto" defaultActiveKey={['0']} alwaysOpen fluid>
            {speciesList.map((species, index) => {
                return (
                    <SpeciesTableContent key={index} index={index} reloadState={reloadState} species={species} />
                )
            })}
        </Accordion>
     )
}

export default SpeciesTable;