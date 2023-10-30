import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Form, Card } from "react-bootstrap";

function AddNews() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [userId, setUserId] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);


    let [message, setMessage] = useState("");
    let [dirty, setDirty] = useState({
        title: false,
        content: false,
        author: false,
        categoryId: false,
        realeaseDate: false,
        userId: false,
    });
    let [errors, setErrors] = useState(
        {
            title: [],
            content: [],
            author: [],
            categoryId: [],
            releaseDate: [],
            userId: [],
        });
    //Validation
    let validate = () => {
        let errorsData = {};
        //speciesName
        errorsData.title = [];
        if (title === "") {
            errorsData.title.push("Title is required");
        }
        //family
        errorsData.content = [];
        if (content === "") {
            errorsData.content.push("Content box is required");
        }
        //information
        errorsData.author = [];
        if (author === "") {
            errorsData.author.push("Author is required");
        }
        //characteristic
        errorsData.categoryId = [];
        if (categoryId === "") {
            errorsData.categoryId.push("Characteristic box is required");
        }
        //allocation
        errorsData.userId = [];
        if (userId === "") {
            errorsData.userId.push("Allocation box is required");
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
    // Species Add event
    let onAddClick = async () => {
        
        // Set all input dirty=true
        let dirtyData = dirty;
        Object.keys(dirty).forEach((control) => {
            dirtyData[control] = true;
        });
        setDirty(dirtyData);

        // //Validate all input
        // validate();
        let formData = new FormData();

        formData.append("Title", title);
        formData.append("Content", content);
        formData.append("Author", author);
        formData.append("CategoryId", categoryId);
        formData.append("ReleaseDate", releaseDate);
        formData.append("userId", userId);
        formData.append("ImageFile", imageFile);
        formData.append("Thumbnail Image File", thumbnailFile);
        formData.append("IsDeleted", false);

        //Send response to server if valid
        if (isValid()) {
            await fetch("https://localhost:7193/api/News",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json; charset=UTF-8",
                        "Authorization": "bearer " + JSON.parse(localStorage.getItem("token"))
                    },
                    body: formData

                }).then((res) => {
                    if (res.ok) {
                        console.log("Add successfully");
                        setMessage(<span className="text-success">Add successfully</span>);
                    } else {
                        console.log("Add failed");
                        console.log(res);
                        setMessage(<span className="text-danger">Add failed</span>);
                    }
                }).catch(rejected => {
                    console.log(rejected);
                });
        }
    }
    console.log(title)
    useEffect(validate, [title, content, author, categoryId, releaseDate, userId]);
    return (
        <Container fluid>
            <Row className="py-5 d-flex justify-content-center align-items-center">
                <Col md={8} lg={10} xs={12}>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-1">
                                <div className="mb-3">
                                    <Form  >
                                        <Form.Group
                                            className="mb-3"
                                            controlId="newsAddTitle">
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={title}
                                                onChange={(e) => {
                                                    setTitle(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter Title" />
                                            <div className="text-danger">
                                                {dirty["title"] && errors["title"][0] ?
                                                    errors["title"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="newsAddContent">
                                            <Form.Label>Content</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                row ={8}
                                                value={content}
                                                onChange={(e) => {
                                                    setContent(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter content" />
                                            <div className="text-danger">
                                                {dirty["content"] && errors["content"][0] ?
                                                    errors["content"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="newsAddAuthor">
                                            <Form.Label>Author</Form.Label>
                                            <Form.Control
                                                value={author}
                                                onChange={(e) => {
                                                    setAuthor(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter author" />
                                            <div className="text-danger">
                                                {dirty["author"] && errors["author"][0] ?
                                                    errors["author"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="newsAddUserId">
                                            <Form.Label>CategoryId</Form.Label>
                                            <Form.Control
                                                value={categoryId}
                                                onChange={(e) => {
                                                    setCategoryId(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter category Id" />
                                            <div className="text-danger">
                                                {dirty["categoryId"] && errors["categoryId"][0] ?
                                                    errors["categoryId"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="newsAddReleaseDate">
                                            <Form.Label>ReleaseDate</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={releaseDate}
                                                onChange={(e) => {
                                                    setReleaseDate(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter its release date" />
                                            <div className="text-danger">
                                                {dirty["releaseDate"] && errors["releaseDate"][0] ?
                                                    errors["releaseDate"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="newsAddUserId">
                                            <Form.Label>UserId</Form.Label>
                                            <Form.Control
                                                value={userId}
                                                onChange={(e) => {
                                                    setUserId(e.target.value);
                                                    validate();
                                                }}
                                                placeholder="Enter user Id" />
                                            <div className="text-danger">
                                                {dirty["userId"] && errors["userId"][0] ?
                                                    errors["userId"][0] : ""}
                                            </div>
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="newsAddImageFile">
                                            <Form.Label>Image</Form.Label>
                                            <Form.Control
                                                type="file"
                                                onChange={(e) => {
                                                    setImageFile(e.target.files[0]);
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="newsAddThumbnailFile">
                                            <Form.Label>Thumbnail</Form.Label>
                                            <Form.Control
                                                type="file"
                                                onChange={(e) => {
                                                    setThumbnailFile(e.target.files[0]);
                                                }}
                                            />
                                        </Form.Group>

                                        <Row>
                                            <Col lg={6} md={6} sm={0}>
                                            </Col>
                                            <Col lg={6} md={6} sm={12} className="d-flex justify-content-end">
                                                <Button href="/admin/news/" size="sm" variant="secondary" className="mx-2" >
                                                    Cancel
                                                </Button>
                                                <Button size="sm" variant="primary" onClick={onAddClick} >
                                                    Add
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Row>{message}</Row>
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

export default AddNews;
