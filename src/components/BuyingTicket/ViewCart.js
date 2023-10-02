import React from "react";
import { Link } from "react-router-dom";
import HeaderCart from "./HeaderCart";
import "./BuyingTicket.css"
import Alert from 'react-bootstrap/Alert';
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
const ViewCart = () => {
    const NavigationButtons = ({ onBackClick, onNextClick }) => {
        return (
            <div className="navigation-buttons text-right">
                <Link to='/buyingticket'>
                <Button className="back-button" style={{ backgroundColor: '#F07300' }} onClick={onBackClick}>
                    <svg
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-left-circle"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                    </svg>
                    ADD MORE ITEMS
                </Button>
                </Link>

                <Button className="next-button" style={{ backgroundColor: 'green' }} onClick={onNextClick}>
                    CHECK OUT
                    <svg
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-right-circle"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                </Button>
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
            <HeaderCart />
            <div className="zoo-information">
                <h4>View Cart</h4>
                <div className="box-alert">
                    <Alert variant="success">
                        <Alert.Heading><h3>Day ticket Zoo - Adult has been added to the cart!</h3></Alert.Heading>
                    </Alert>
                </div>
            </div>
            <div className="ticket-table">
                <div className="ticket-table-information">ITEMS</div>

                <Table className="table" bordered variant="none">
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Item information</th>
                            <th>Item price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <th className="text-align">Lấy img ra</th>
                            <th className="list-ticket">
                                <p style={{ color: '#3C5724' }}>Loại Ticket</p>
                                <p>Your selected options:</p>

                                <p>Valid from:</p>
                                <p>Valid to:</p>
                                <p>Item reserved for you until:</p>
                            </th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tbody>
                </Table>
                <NavigationButtons className="button-direct" onBackClick={handleBackClick} onNextClick={handleNextClick} />



            </div>
        </>
    );
};

export default ViewCart;