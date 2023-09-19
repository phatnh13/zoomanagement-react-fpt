import React, { useState } from "react";
import TigerImg from "../../assets/whiteTiger.jpg";
import WebLogo from "../../assets/WebLogo.png";
import "./BuyTicket.css"
import Alert from 'react-bootstrap/Alert';
import { Col } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaYoutube, FaInstagram, FaCalendarDay } from "react-icons/fa6";
import Table from 'react-bootstrap/Table';



const BuyTicket = () => {
    const [products1, setTicket1] = useState({
        count: 0
    })

    const handleChange1 = (e) => {

        setTicket1({ count: e.target.value || 0 })
    }

    const decrease1 = (e) => {
        if (products1.count <= 0) {
            return
        }
        setTicket1({ count: products1.count - 1 })
    }
    const [products2, setTicket2] = useState({
        count: 0
    })

    const handleChange2 = (e) => {

        setTicket2({ count: e.target.value || 0 })
    }

    const decrease2 = (e) => {
        if (products2.count <= 0) {
            return
        }
        setTicket2({ count: products2.count - 1 })
    }
    const [products3, setTicket3] = useState({
        count: 0
    })

    const handleChange3 = (e) => {

        setTicket3({ count: e.target.value || 0 })
    }

    const decrease3 = (e) => {
        if (products3.count <= 0) {
            return
        }
        setTicket3({ count: products3.count - 1 })
    }

    return (
        <>
            <div className="header-img">
                <div className="logo-box">
                    <div className="logo">
                        <div className="text-logo-top">VietNam Zoo</div>
                        <div className="text-logo-down">Since 1864</div>
                        <img className="web-logo" alt="WebLogo" src={WebLogo} />
                        <div className="text-right">
                            <div>Back to Zoo Website</div>
                            <Col className="footer-social-icon">
                                <FaFacebook className="footer-icon" />
                                <FaGoogle className="footer-icon" />
                                <FaInstagram className="footer-icon" />
                                <FaYoutube className="footer-icon" />
                            </Col>
                        </div>


                    </div>
                </div>
                <img className="white-tiger-backgroud" alt="Tiger" src={TigerImg} />
                <div className="zoo-information">
                    <h4>Zoo Day Ticket</h4>
                    <div className="box-alert">
                        <Alert variant="success">
                            <Alert.Heading><h3>TIP-CHEAPEST AND QUICKEST TICKET ONLY ONLINE!</h3></Alert.Heading>
                            <p>Online tickets cheaper than at ticket booths on site</p>
                            <p>Skip the queue with online tickets and go straight to ticket checkers</p>
                            <p>Easy online booking without user account</p>
                            <hr />
                        </Alert>
                    </div>
                    <div className="ticket-table">
                        <div className="ticket-table-information">Please select your item</div>


                        <div className="table">
                            <Table bordered variant="none">

                                <tr>
                                    <th className="text-align">Please select a day</th>
                                    <th><FaCalendarDay /></th>
                                    <th>Cost</th>
                                </tr>

                                <tbody>
                                    <tr>
                                        <th className="text-align">Day Ticket Zoo - Adult</th>
                                        <th className="list-items">
                                            <input type='button' value="-" onClick={decrease1} />
                                            <input type='text' value={products1.count} onChange={handleChange1} />
                                            <input type='button' value="+" onClick={() => setTicket1({ count: products1.count + 1 })} />
                                        </th>
                                        <th>2$</th>
                                    </tr>



                                    <tr>
                                        <th className="text-align">Day Ticket Zoo - Children<p>aged under 18</p></th>
                                        <th className="list-items">
                                            <input type='button' value="-" onClick={decrease2} />
                                            <input type='text' value={products2.count} onChange={handleChange2} />
                                            <input type='button' value="+" onClick={() => setTicket2({ count: products2.count + 1 })} />
                                        </th>
                                        <th>1.4$</th>
                                    </tr>
                                    <tr>
                                        <th className="text-align">Day Ticket Zoo - Children<p>lower than 1m3</p></th>
                                        <th className="list-items">
                                            <input type='button' name="-" onClick={decrease3} />
                                            <input type='text' value={products3.count} onChange={handleChange3} />
                                            <input type='button' value="+" onClick={() => setTicket3({ count: products3.count + 1 })} />
                                        </th>
                                        <th>Free</th>
                                    </tr>
                                    <tr>
                                        <th className="text-align">Total</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </tbody>




                            </Table>
                        </div>

                        <div className="note">
                        <p>Please note!</p>

                        <p>After purchase you will receive your tickets by e-mail (can be presented digitally). The tickets are only valid on the selected date. Booked tickets are excluded from cancellation and/or exchange.</p>

                        <p>Please find further information on the conservation contribution here. The contribution is optional and can be deselected in the cart.</p>

                        <p>Children under 12 years of age and any visitors who lack the necessary maturity or require permanent supervision due to a mental and/or physical condition must be accompanied and supervised on the premises at all times by an adult chaperone</p>

                        <p>* Only valid in combination with a corresponding proof. The proof must be personalized, given a (valid) validity and issued by an official authority/institution (not digital). The proof will be checked at the admission checkers - please have it ready along with a photo ID.</p>
                    </div>
                    </div>
                
                </div>
            </div >

        </>
    );
};

export default BuyTicket;