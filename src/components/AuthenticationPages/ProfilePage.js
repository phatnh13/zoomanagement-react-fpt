import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Card, Button } from "react-bootstrap";
import { DateHelper } from "../DateHelper";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
    const userId = JSON.parse(localStorage.getItem('loginUser')).userId;
    const [user, setUser] = useState({});
    const [currPass, setCurrPass] = useState();
    const [newPass, setNewPass] = useState();
    const [confirmPass, setConfirmPass] = useState();

    let [message, setMessage] = useState("");

    //#region validate
    let [dirty, setDirty] = useState({
        password: false,
        newpassword: false,
        confirmpassword: false
    });
    let [errors, setErrors] = useState(
        {
            password: [],
            newpassword: [],
            confirmpassword: [],
            
        });
        //Validation
    let validate = () => {
        let errorsData = {};
            //Password
        errorsData.password = [];
        if (currPass === "") {
            errorsData.password.push("Current password is required");
        }
            //New Password
        errorsData.newpassword = [];
        if (newPass === "") {
            errorsData.newpassword.push("New password is required");
        }
            //New Password
        errorsData.confirmpassword = [];
        if (confirmPass === "") {
            errorsData.confirmpassword.push("Confirm password is required");
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

    let handleChangePassword = () => {
        console.log(currPass, "curr", newPass, "new", confirmPass, "confirm");
        // Set all input dirty=true
        let dirtyData = dirty;
        Object.keys(dirty).forEach((control) => {
            dirtyData[control] = true;
        });
        setDirty(dirtyData);

        //Validate all input
        validate();
        if (isValid()) {
            fetch(`https://vietnamzoo.azurewebsites.net/api/User/password?userId=${user.userId}&oldPassword=${currPass}&newPassword=${newPass}&confirmPassword=${confirmPass}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
                },
            })
                .then(res => {
                    res.json();
                    if (res.ok) {
                        setMessage(<span className="text-success">Change password successfully</span>);
                    } else {
                        setMessage(<span className="text-warning">Change password failed</span>);
                    }
                }).catch(rejected => {
                    console.log(rejected)
                });
            
        } else {
            setMessage(<span className="text-danger">Unable to change password</span>);
        }
    }

    const navigate = useNavigate();
    const handleLogout = () => {
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
        navigate("/login");
    }
    const handleHome = () => {
        navigate("/");
    }
    const handleManage = () => {
        navigate("/login");
    }

    useEffect(() => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/user/${userId}`,
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
                },
            }
        )
            .then((res) => res.json())
            .then(data => {
                setUser(data);
            }).catch(rejected => {
                console.log(rejected);
            });
    }, []);
    return (
        <Container>
            <Row>
                <Col lg={4} md={3} sx={0}>
                    <h2 className="my-5">Profile Management</h2>
                </Col>
                <Col lg={8} md={9} sx={12} >
                        <Card className="mt-5 mb-3">
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col>
                                            <Card.Title>Account Information</Card.Title>
                                        </Col>
                                        <Col lg={8} md={12} sm={12}>
                                            <p><strong>User Name: </strong>{user.userName}</p>
                                            <p><strong>Full Name: </strong>{user.fullName}</p>
                                            <p><strong>Email: </strong>{user.email}</p>
                                            <p><strong>Phone Number: </strong>{user.phoneNumber}</p>
                                            <p><strong>Date of Birth: </strong>{DateHelper.formatDate(user.dateOfBirth)}</p>
                                            <p><strong>Gender: </strong>{user.gender}</p>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mb-1">
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col>
                                <Card.Title>Change Password</Card.Title>
                                        </Col>
                                        <Col lg={8} md={12} sm={12} >
                                        <Form.Group>
                                        <Form.Label>Current Password</Form.Label>
                                        <Form.Control
                                        type="password"
                                        value={currPass}
                                        onChange={
                                            (e) => setCurrPass(e.target.value)}
                                        />
                                        <div className="text-danger">
                                                {dirty["password"] && errors["password"][0] ?
                                                    errors["password"][0] : ""}
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>New Password</Form.Label>
                                        <Form.Control
                                        type="password"
                                        value={newPass}
                                        onChange={
                                            (e) => setNewPass(e.target.value)}
                                        />
                                        <div className="text-danger">
                                                {dirty["newpassword"] && errors["newpassword"][0] ?
                                                    errors["newpassword"][0] : ""}
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                        type="password"
                                        value={confirmPass}
                                        onChange={
                                            (e) => setConfirmPass(e.target.value)}
                                        />
                                        <div className="text-danger">
                                                {dirty["confirmpassword"] && errors["confirmpassword"][0] ?
                                                    errors["confirmpassword"][0] : ""}
                                        </div>
                                    </Form.Group></Col>
                                    </Row>
                                </Card.Text>
                                <div className="d-flex justify-content-end">
                                {message}
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Button variant="outline-dark" onClick={handleChangePassword} >Change Password</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="mb-3" border="0">
                            <Card.Body className="d-flex justify-content-center">
                                <Button size="lg" variant="dark" className="m-3" onClick={handleLogout}>Logout</Button>
                                <Button size="lg" variant="outline-dark" className="m-3" onClick={handleHome}>Back to Home</Button>
                                <Button size="lg" variant="outline-dark" className="m-3" onClick={handleManage}>Go to Management</Button>
                            </Card.Body>
                        </Card>
                </Col>

            </Row>
        </Container>
    )
}

export default ProfilePage;