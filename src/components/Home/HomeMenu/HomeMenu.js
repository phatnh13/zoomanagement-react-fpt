import { useState } from 'react';
import {Button, Offcanvas, Container, Row, Col} from 'react-bootstrap';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Saigon Zoo</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
            <Col className='col-md-6'>
            <ul>
                <li>Ticket</li>
                <li>ViewTicket</li>
                <li>Ticket Cart</li>
            </ul>
            <ul>
                <li>News</li>
                <li>View News</li>
            </ul>
            </Col>
            <Col className='col-md-6'>
            <ul>
                <li>Map</li>
                <li>View Map</li>
            </ul>
            <ul>
                <li>Opening Hours</li>
                <li>View</li>
            </ul>
            <ul>
                <li>Login</li>
            </ul>
            </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {['top'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
export default Example

