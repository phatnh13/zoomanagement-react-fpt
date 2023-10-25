
import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Form, Pagination, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const AllNews = () => {

  const [news, setNews] = useState([])
  const [searchString, setSearchString] = useState('')
  const [searchBy, setSearchBy] = useState('Title')
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navagate = useNavigate()

  const handleNavigation = (item) => {
    navagate(`/news/${item.id}`, { state: item })
  }

  let PaginationLoad = () => {
    let items = [];
    for (let page = 1; page <= totalPages; page++) {
      items.push(<Pagination.Item key={page} onClick={onPaginationClick}>{page}</Pagination.Item>)
    }
    return items;
  }

  const onPaginationClick = (e) => {
    setCurrentPage(e.target.text);
  }

  useEffect(() => {
    fetch(`https://localhost:7193/api/News?pageNumber=${currentPage}&searchBy=${searchBy}&searchString=${searchString}`, {
      method: "GET",
      headers: {
        "content-type": "application/json; charset=UTF-8"
      }
    })
      .then(data => data.json())
      .then(data => {
        console.log(data)
        setNews(data.pagingList);
        setTotalPages(data.totalPages);
      })
      .catch(error =>
        console.error(error)
      )

  }, [currentPage, searchBy, searchString]);

  return (
    <>
      <Row xs={1} md={2} className="g-4">

        {news.map((item, idx) => {
          return (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={item.thumnail} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
      <Container fluid>
        <Row className="vh-20 d-flex justify-content-center align-items-center m-3 pb-1 border-bottom">
          {/*Start search*/}
          {/*Search filter */}
          <Col lg={3} md={3} xs={12}>
            <Form.Group className="mb-3" controlId="search">
              <Form.Select
                value={searchBy}
                onChange={(e) => {
                  setSearchBy(e.target.value)
                }}
              >
                <option value={"Title"}>News Name</option>
              </Form.Select>
            </Form.Group>
          </Col>
          {/*Search filter */}
          {/*Search bar */}
          <Col lg={8} md={8} xs={11}>
            <Form.Group className="mb-3" controlId="search">
              <Form.Control
                type="text"
                placeholder="Search"
                value={searchString}
                onChange={(e) => { setSearchString(e.target.value) }}>
              </Form.Control>
            </Form.Group>
          </Col>
          {/*Search bar */}
          {/*End search*/}
          <Col >
            <Button style={{
              backgroundColor: '#3c5724',
              color: '#fff'
            }}
              className="news-filter__reset-button btn btn--variant" title="Reset" href="/allnews">Clear </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {/*Start Table*/}
            <Pagination size="md" className="d-flex justify-content-center">
              {PaginationLoad()}
            </Pagination>
            {/*Start Table*/}
          </Col>
        </Row>
      </Container >
    </>
  );

}

export default AllNews;