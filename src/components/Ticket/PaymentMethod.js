import React from "react";
import HeaderCart from "./HeaderCart";
import { Row, Col, Form } from "react-bootstrap";


const PaymentMethod = () => {

    return (
        <>
            <HeaderCart />
            <div className="zoo-information">
                <h4>METHOD OF PAYMENT</h4>
            </div>
            <div className="ticket-table">
                <div className="ticket-table-information">CHOOSE YOUR PAYMENT</div>
                <div class="form-check">
                    <Form>
                        <Row>
                            <Form.Group as={Col} md="1">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                            </Form.Group>
                            <Form.Group as={Col} md="1">
                            </Form.Group>
                        </Row>
                    </Form>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Default checked radio
                    </label>
                </div>
            </div>
        </>
    )

}
export default PaymentMethod