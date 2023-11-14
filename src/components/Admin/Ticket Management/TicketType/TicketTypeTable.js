import React from "react";
import { Table } from "react-bootstrap";
import TicketTypeTableContent from "./TicketTypeTableContent";
function TicketTypeTable({ticketsList,reloadState}) {
    return ( 
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th className="col-1">No</th>
                    <th className="col-6">Ticket Name</th>
                    <th className="col-1">Price</th>
                    <th className="col-1">ReleaseDate</th>
                    <th className="col-1"></th>
                    <th className="col-1"></th>
                </tr>
            </thead>
            <tbody>
                {ticketsList.map((ticket, index) => {
                    return <TicketTypeTableContent key={index} ticket={ticket} index={index} reloadState={reloadState} />
                })}
            </tbody>
        </Table>
     )
}

export default TicketTypeTable;