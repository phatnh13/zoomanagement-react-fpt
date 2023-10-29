import React from "react";
import TicketHome1 from "../../../assets/ticketHome1.jpg";
import TicketHome2 from "../../../assets/ticketHome2.png";
import { Row, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Welcome.css"

const WelcomeText = () => {
    return (
        <>
            <div style={{ width: '100%', backgroundColor: 'white' }}>
                <div className="welcome-text__information">Welcome to Saigon Zoo</div>
                <div className="about-zoo__information mx-5">Saigon Zoo is one of the buildings with the oldest history in Ho Chi Minh. Saigon Zoo is currently home to 590 animals of 125 species, 1,800 plants of 260 species; 23 species of domestic orchids; 33 species of cacti, 34 species of ornamental plants, green grass, etc.</div>
            </div>
        </>
    )
}

export default WelcomeText
