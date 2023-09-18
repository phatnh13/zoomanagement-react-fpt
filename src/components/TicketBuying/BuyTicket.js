import React, {useState} from "react";
import TigerImg from "../../assets/whiteTiger.jpg";
import WebLogo from "../../assets/WebLogo.png";
import "./BuyTicket.css"
import Alert from 'react-bootstrap/Alert';
import { Col } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaYoutube, FaInstagram, FaCalendarDay } from "react-icons/fa6";
import Table from 'react-bootstrap/Table';



const BuyTicket = () => {
        const [products, setProducts] = useState({
            count: 0
        })
    
        const handleChange = (e) => {
            
            setProducts({ count: e.target.value || 0 })
        }
    
        const decrease = (e) => {
            if(products.count <= 0){
                return 
            }
            setProducts({count: products.count - 1})
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
                <img className="tiger-backgroud" alt="Tiger" src={TigerImg} />
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
                    <Table striped bordered hover variant="warning">
                    
                    <tr>
                        <th className="text-align">Please select a day</th>
                        <th><FaCalendarDay/></th>                        
                    </tr>
                    
                    <tbody>
                        <td className="text-align">Day Ticket Zoo - Adult</td>
                        <td>
                            <div className="list-item">
                            <input type='button' onClick={decrease}/>
                            <input type='text' value={products.count} onChange={handleChange}/>
                            <input type='button' onClick={() => setProducts({count: products.count + 1})}/>
                            <span className="price">2$ </span>
                            </div>
                        </td>
                    </tbody>
                </Table>
                    </div>
                
                
                </div>
            </div>
                </div>

        </>
    );
};

export default BuyTicket;