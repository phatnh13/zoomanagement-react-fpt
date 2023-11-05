import React, { useState } from "react";
import { DateHelper } from "../../../DateHelper";
import { Button } from "react-bootstrap";
import EditTicketModal from "./Modal/EditTicketModal";
import DeleteTicketModal from "./Modal/DeleteTicketModal";
function TicketTypeTableContent({ticket, reloadState}) {
    //#region modal
        //Edit ticket
    const [showEditTicketModal, setShowEditTicketModal] = useState(false);
    const handleCloseEditTicketModal = () => setShowEditTicketModal(false);
    const handleShowEditTicketModal = () => setShowEditTicketModal(true);
        //Delete ticket
    const [showDeleteTicketModal, setShowDeleteTicketModal] = useState(false);
    const handleCloseDeleteTicketModal = () => setShowDeleteTicketModal(false);
    const handleShowDeleteTicketModal = () => setShowDeleteTicketModal(true);

    //#endregion

    return ( 
        <tr>
            <td>{ticket.ticketId}</td>
            <td>{ticket.ticketName}</td>
            <td>{ticket.price}$</td>
            <td>{DateHelper.formatDate(ticket.releaseDate)}</td>
            <td>
                <Button variant="outline-warning" className="me-2" onClick={handleShowEditTicketModal}>
                    Edit
                </Button>
            </td>
            <td>
                <Button variant="outline-danger" onClick={handleShowDeleteTicketModal}>
                    Delete
                </Button>
            </td>
            <EditTicketModal 
                show={showEditTicketModal} 
                handleClose={handleCloseEditTicketModal}
                reloadState={reloadState}
                ticket={ticket} />  
            <DeleteTicketModal
                show={showDeleteTicketModal}
                handleClose={handleCloseDeleteTicketModal}
                reloadState={reloadState}
                ticket={ticket} />

        </tr>
     )
}

export default TicketTypeTableContent;