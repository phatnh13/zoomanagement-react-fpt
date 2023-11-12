import React, { useContext, useMemo } from "react";
import { Card, CardGroup, Container, Button } from "react-bootstrap";
import { TicketContext } from "../TicketContext/TicketContext";
import { Link } from "react-router-dom";

const ViewTicket = () => {

    const context = useContext(TicketContext)

    const tickets = context.tickets

    useMemo(() => {
        window.scrollTo({top: 0})
      },[])

    return (
        <>
            <div style={{backgroundColor: '#F7F1DB'}}>
                <Container className="vh-100">
                    <h4 className='pt-3'>Ticket</h4>
                    <CardGroup className='mt-5'>
                        {tickets.map((data) => {
                            return (
                                <Card className="mx-5" key={data.ticketId} data={data}>
                                    <Card.Img style={{ height: '300px', width: 'auto' }} variant="top" src={data.image} />
                                    <Card.Body>
                                        <Card.Title className="card-title-2-rows" style={{ color: '#3C5724', height: '3.5rem' }}>{data.ticketName}</Card.Title>
                                        <Card.Text>
                                            {/* Toan tu ba ngoi => print Free instead of 0 */}
                                            {data.price === 0 ? (
                                                <p className='mt-3'>Free</p>
                                            ) : (
                                                <p className='mt-3'>Price: {data.price}$</p>
                                            )}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className='d-flex justify-content-center'>
                                        <Button className="view-price__btn-direct-ticket btn btn-warning"><Link className="link-underline-opacity-0 link-underline link-light" to="/buyingticket">Book Now</Link></Button>
                                    </Card.Footer>
                                </Card>
                            );
                        })}
                    </CardGroup>
                </Container>
            </div>
        </>
    )
}

export default ViewTicket
