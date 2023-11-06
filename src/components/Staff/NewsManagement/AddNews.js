import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DateHelper } from "../../DateHelper";

function AddNews() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [releaseDate, setReleaseDate] = useState(DateHelper.getToday());
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem("loginUser")).userId);
    const [imageFile, setImageFile] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);

    const [newsCategories, setNewsCategories] = useState([]);


    let [dirty, setDirty] = useState({
        title: false,
        content: false,
        author: false,
        categoryId: false,
        realeaseDate: false,
    });
    let [errors, setErrors] = useState(
        {
            title: [],
            content: [],
            author: [],
            categoryId: [],
            releaseDate: [],
        });
        //Validation
    let validate = () => {
        let errorsData = {};
        //title
        errorsData.title = [];
        if (title === "") {
            errorsData.title.push("Title is required");
        }
        //content
        errorsData.content = [];
        if (content === "") {
            errorsData.content.push("Content box is required");
        }
        //author
        errorsData.author = [];
        if (author === "") {
            errorsData.author.push("Author is required");
        }
        //characteristic
        errorsData.categoryId = [];
        if (categoryId === "") {
            errorsData.categoryId.push("CategoryId box is required");
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
    // News Add event
    let onAddClick = async () => {

        // Set all input dirty=true
        let dirtyData = dirty;
        Object.keys(dirty).forEach((control) => {
            dirtyData[control] = true;
        });
        setDirty(dirtyData);

        // //Validate all input
        validate();
        let formData = new FormData();

        formData.append("Title", title);
        formData.append("Content", content);
        formData.append("Author", author);
        formData.append("CategoryId", categoryId);
        formData.append("ReleaseDate", releaseDate);
        formData.append("UserId", userId);
        formData.append("ImageFile", imageFile);
        formData.append("ThumnailFile", thumbnailFile);
        // formData.append("IsDeleted", false);

        //Send response to server if valid
        if (isValid()) {
            fetch(`https://vietnamzoo.azurewebsites.net/api/News`,
                {
                    method: "POST",
                    headers: {
                        "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
                    },
                    body: formData

                }).then((res) => {
                    if (res.ok) {
                        alert("Add successfully");
                    } else {
                        console.log(res);
                        alert("Add failed");
                    }
                }).catch(rejected => {
                    console.log(rejected);
                });
        }
    }
    const navigate = useNavigate();
    let handleBack = () => {
        navigate("/staff/news");
    }
    useEffect(() => {
        fetch(`https://vietnamzoo.azurewebsites.net/api/NewsCategories`, {
            method: "GET",
            headers: {
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("loginUser")).token
            },
        })
            .then((res) =>  res.json())
            .then(data => {
                setNewsCategories(data);
                console.log(data, "dataaaa");
                console.log(newsCategories, "newssssss");
            })
            .catch((rejected) => console.log(rejected));
    }, []);
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
                                        <Row>
                                            <Col>
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
                                            </Col>
                                            <Col>
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
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={6} md={6} sm={12}>
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
                                            </Col>
                                            <Col>
                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="newsCategoryId">
                                                    <Form.Label>Category</Form.Label>
                                                    <Form.Select 
                                                    value={categoryId}
                                                    onChange={(e) => {setCategoryId(e.target.value);}}
                                                    >
                                                        <option value="">Select category</option>
                                                        {newsCategories.map((item) => (
                                                            <option
                                                                key={item.categoryId}
                                                                value={item.categoryId}
                                                                onChange={(e) => {
                                                                    setCategoryId(e.target.value);
                                                                }}
                                                            >
                                                                {item.categoryName}
                                                            </option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="newsAddReleaseDate">
                                            <Form.Label>ReleaseDate</Form.Label>
                                            <Form.Control
                                                type="date"
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
                                            className="mb-3 vh-50"
                                            controlId="newsAddContent">
                                            <Form.Label>Content</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={7}
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

                                        <Row>
                                            <Col lg={6} md={6} sm={0}>
                                            </Col>
                                            <Col lg={6} md={6} sm={12} className="d-flex justify-content-end">
                                                <Button onClick={handleBack} size="sm" variant="secondary" className="mx-2" >
                                                    Back
                                                </Button>
                                                <Button size="sm" variant="primary" onClick={onAddClick} >
                                                    Add News
                                                </Button>
                                            </Col>
                                        </Row>
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
