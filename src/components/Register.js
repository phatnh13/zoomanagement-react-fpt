import React from "react";
import Form from 'react-bootstrap/Form';

const Register = () => {
    return (
        <Form method="POST">
            <Form.Group controlId="formUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <button type="submit" className="btn btn-primary">Register</button>
        </Form>
    );
};

export default Register;