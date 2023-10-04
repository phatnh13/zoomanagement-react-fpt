import React, { useEffect, useState, useContext } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { UserContext } from "../../UserContext";
const Login = () => {
    let currentValue = useContext(UserContext);
    console.log(currentValue);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let [message, setMessage] = useState("");
    let [dirty, setDirty] = useState({
        email: false,
        password: false
    });
    let [errors, setErrors] = useState(
        {
            email: [],
            password: []
        });
    //Validation
    let validate = () => {
        let errorsData = {};
        //email
        errorsData.email = [];
        if (email === "") {
            errorsData.email.push("Email is required");
        }
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!emailRegex.test(email)) {
            errorsData.email.push("Email is invalid");
        }
        //password
        errorsData.password = [];
        if (password === "") {
            errorsData.password.push("Password is required");
        }
        const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16})/;
        if (!passwordRegex.test(password)) {
            errorsData.password.push("Password should be 8 to 16 characters long and should contain at least one uppercase letter, one lowercase letter, and one numeric digit");
        }
        setErrors(errorsData);
    }
    //Check valid before submit
    let isValid = () => {
        let valid = true;
        for (let control in errors) {
            if (errors[control].length > 0) {
                valid = false;
            }
        }
        return valid;
    }
    //Login Click event
    let onLoginClick = async () => {
        // Set all input dirty=true
        let dirtyData = dirty;
        Object.keys(dirty).forEach((control) => {
            dirtyData[control] = true;
        });
        setDirty(dirtyData);
        //Validate all input
        validate();
        //Send response to server if valid
        if (isValid()) {
            let response = await fetch("http://localhost:3000/login",
                {
                    method: "POST",
                    body: JSON.stringify({
                        email: email,
                        password: password
                    }),
                    headers: {
                        "Content-type": "application/json"
                    },
                }
            );
            if (response.ok) {
                setMessage(<span className="text-success">Login successful</span>);
            }

        } else {
            setMessage(<span className="text-danger">Login failed</span>);
        }
    }

    useEffect(validate, [email, password]);
    return (
        <Container fluid>
            <Row className="py-5 d-flex justify-content-center align-items-center">
                <Col md={8} lg={5} xs={12}>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-2 mt-md-4">
                                <h2 className="my-6 text-center">Login</h2>
                                <div className="mb-3">
                                    <Form>
                                        {/*Start Email*/}
                                        <Form.Group
                                            className="mb-3"
                                            controlId="loginEmail"
                                        >
                                            <Form.Label className="text-center">Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    validate();
                                                }}
                                            />
                                            <div className="text-danger">
                                                {dirty["email"] && errors["email"][0] ?
                                                 errors["email"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        {/*End Email*/}
                                        {/*Start Password*/}
                                        <Form.Group
                                            className="mb-3"
                                            controlId="loginPassword"
                                        >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                    validate();
                                                }}
                                            />
                                            <div className="text-danger">
                                                {dirty["password"] && errors["password"][0] ?
                                                 errors["password"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        {/*End Password*/}

                                        {/*Login button*/}
                                        <div className="m-1 text-center">{message}</div>
                                        <div className="d-grid">
                                            <Button variant="primary" onClick={onLoginClick}>
                                                Login
                                            </Button>
                                        </div>
                                        {/*Login button*/}
                                    </Form>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Login;