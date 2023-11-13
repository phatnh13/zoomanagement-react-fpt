import React, {useMemo} from "react";
import { Link } from "react-router-dom";
import "./BuyingTicket.css"
import { Button, Alert, Container } from "react-bootstrap";
import TicketItemsTable from "./TicketItemsTable";

const ViewCart = () => {
    useMemo(() => {
        window.scrollTo({top: 0})
      },[])
    const NavigationButtons = ({ onBackClick, onNextClick }) => {
        return (
            <div className="button-direct pb-5">
                <Link to='/buyingticket'>
                    <Button className="button-left" onClick={onBackClick}>
                        <svg
                            width="40"
                            height="40"
                            fill="currentColor"
                            class="bi bi-arrow-left-circle"
                            viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                        </svg>
                        ADD MORE ITEMS
                    </Button>
                </Link>
                {' '}
                <Link to='/billingaddress'>
                    <Button className="button-right" onClick={onNextClick}>
                        CHECK OUT {' '}
                        <svg
                            width="40"
                            height="40"
                            fill="currentColor"
                            class="bi bi-arrow-right-circle"
                            viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                    </Button>
                </Link>
            </div>
        );
    };
    const handleBackClick = () => {
        // Implement your logic for going back
        console.log('Back button clicked');
    };

    const handleNextClick = () => {
        // Implement your logic for going next
        console.log('Next button clicked');
    };
    return (
        <>
            <div>
                <Container className="zoo-information">
                    <h4>View Cart</h4>
                    <div className="box-alert">
                        <Alert className="mx-auto" variant="success">
                            <Alert.Heading><h3>Day ticket Zoo - Adult has been added to the cart!</h3></Alert.Heading>
                        </Alert>
                    </div>
                </Container>
                <Container className="ticket-table  mx-auto">
                    <div className="ticket-table-information">ITEMS</div>
                    <TicketItemsTable />
                    <NavigationButtons onBackClick={handleBackClick} onNextClick={handleNextClick} />
                </Container>
            </div>
        </>
    );
};

export default ViewCart;