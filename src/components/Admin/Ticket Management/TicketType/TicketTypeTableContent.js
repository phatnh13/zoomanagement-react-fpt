import React, { useState } from "react";
import { DateHelper } from "../../../DateHelper";
import { Button, Image } from "react-bootstrap";
import EditTicketModal from "./Modal/EditTicketModal";
import DeleteTicketModal from "./Modal/DeleteTicketModal";
import Delete from "../../../../assets/delete.png";
import Update from "../../../../assets/edit.png";

function TicketTypeTableContent({ ticket, reloadState, index }) {
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
            <td>{index}</td>
            <td>{ticket.ticketName}</td>
            <td>{ticket.price}$</td>
            <td>{DateHelper.formatDate(ticket.releaseDate)}</td>
            <td>
                <Button variant="outline-warning" className="me-2" onClick={handleShowEditTicketModal}>
                    <Image style={{ height: '1rem', width: '1rem' }} src={Update}></Image>
                </Button>
            </td>
            <td>
                <Button variant="outline-danger" onClick={handleShowDeleteTicketModal}>
                    <Image style={{ height: '1rem', width: '1rem' }} src={Delete}></Image>
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