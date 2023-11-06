import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    let [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));
    const [loading, setLoading] = useState(false);
    // let [user, setUser] = useState(JSON.parse(localStorage.getItem("loginUser")))

    //Dummy state to force re-render
    const [reload, setReload] = useState(false);
    //#region validate
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
    //#endregion

    //Handle Redirect
    const navigate = useNavigate();
    let handleRedirectManagement = () => {
        switch (JSON.parse(localStorage.getItem("loginUser")).role) {
            case "Admin":
                return ("/admin/staff")

            case "OfficeStaff":
                return("/staff/trainer");
                
            case "ZooTrainner":
                return("/trainer/animal");
            default:
                return("/login");
        }
    }
    let handleLogout = () => {
        const emptyUser = {
            userId: 0,
            userName: "",
            email: "",
            role: "",
            token: "",
            expiration: ""
        };
        localStorage.setItem("loginUser", JSON.stringify(emptyUser));
        localStorage.setItem("isLoggedIn", "false");
        setIsLoggedIn(localStorage.getItem("isLoggedIn"));
        navigate("/login");
    }
    //Login Click event
    let onLoginClick = async () => {
        setLoading(true);
        localStorage.setItem("isLoggedIn", false);
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
            fetch("https://vietnamzoo.azurewebsites.net/api/User/login",
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
                    localStorage.setItem("isLoggedIn", "true");
                    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
                    setLoading(false);
                })
                .catch(rejected => {
                    console.log(rejected);
                    setMessage(<span className="text-danger">Login failed</span>);
                    setLoading(false);
                });

        } else {
            setMessage(<span className="text-danger">Login failed</span>);
            setLoading(false);
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        setReload(!reload);
    }, []);
    useEffect(validate, [userName, password, reload]);
    return (
        <Container className='vh-95' fluid>
            <Row className="mt-5 d-flex justify-content-center align-items-center">
                {isLoggedIn !== "true" ? (
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
                                                <Button variant="primary" onClick={onLoginClick}
                                                    disabled={loading}>
                                                    {loading ? <Spinner animation="border" size="sm" /> : 'Login'}
                                                </Button>
                                            </div>
                                            <Link className="d-block text-center mt-2 btn border" to="/">Back to home</Link>
                                            {/*Login button*/}
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>) : (
                    navigate(handleRedirectManagement())
                )}
            </Row>
        </Container>
    )
}
export default Login;