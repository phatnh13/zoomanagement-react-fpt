import React, { useEffect, useState, useContext } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
const Login = () => {
    const context = useContext(UserContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    let [message, setMessage] = useState("");
    let [dirty, setDirty] = useState({
        userName: false,
        password: false
    });
    let [errors, setErrors] = useState(
        {
            userName: [],
            password: []
        });
    //Validation
    let validate = () => {
        let errorsData = {};
        //userName
        errorsData.userName = [];
        if (userName === "") {
            errorsData.userName.push("Username is required");
        }
        //password
        errorsData.password = [];
        if (password === "") {
            errorsData.password.push("Password is required");
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
            fetch("https://localhost:7193/api/User/login",
                {
                    method: "POST",
                    body: JSON.stringify({
                        userName: userName,
                        password: password
                    }),
                    headers: {
                        "content-type": "application/json; charset=UTF-8"
                    }
                }
            ).then((res) => res.json())
                .then(data => {
                    localStorage.setItem("loginUser", JSON.stringify(data));
                    localStorage.setItem("token", JSON.stringify(data.token));
                }).catch(rejected => {
                    console.log(rejected);
                });
            } else {
                setMessage(<span className="text-danger">Login failed</span>);
            }
        }
        
        useEffect(validate, [userName, password]);
        return (
            <Container className='vh-100' fluid>
            {console.log(context.user, "contextUser")}
            <Row className="mt-5 py-5 d-flex justify-content-center align-items-center">
                <Col md={8} lg={5} xs={12}>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-2 mt-md-4">
                                <h2 className="my-6 text-center">Login</h2>
                                <div className="mb-3">
                                    <Form>
                                        {/*Start userName*/}
                                        <Form.Group
                                            className="mb-3"
                                            controlId="loginuserName"
                                        >
                                            <Form.Label className="text-center">Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your username"
                                                value={userName}
                                                onChange={(e) => {
                                                    setUserName(e.target.value);
                                                    validate();
                                                }}
                                            />
                                            <div className="text-danger">
                                                {dirty["userName"] && errors["userName"][0] ?
                                                    errors["userName"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        {/*End userName*/}
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
                                            <Link to="/staff/trainer" >
                                                Staff
                                            </Link>
                                            
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