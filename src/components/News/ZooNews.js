
import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Form, Pagination, Button, CardImg } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { DateHelper } from '../DateHelper';
import NewsPanda from '../../assets/NewsPan.jpg'


const AllNews = () => {

  const [news, setNews] = useState([])
  const [searchString, setSearchString] = useState('')
  const [searchBy, setSearchBy] = useState('ReleaseDate')
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate()

  const handleNavigation = (item) => {
    console.log("Navigarun");
    navigate(`/news`, { state: { item: item } })
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

  const handleClick = (item) => {
    console.log(item)
    handleNavigation(item);
  }

  useEffect(() => {
    fetch(`https://localhost:7193/api/News?pageNumber=${currentPage}&searchBy=${searchBy}&searchString=${searchString}`, {
      method: "GET",
      headers: {
        "content-type": "application/json; charset=UTF-8"
      }
    }).then(data => data.json())
      .then(data => {
        console.log(data)
        setNews(data.pagingList);
        setTotalPages(data.totalPages);
      }).catch(error => console.log(error))

  }, [currentPage, searchBy, searchString]);

  return (
    <>
      <div style={{ backgroundColor: '#F7F1DB' }}>
          <Card.Img fluid  src={NewsPanda} style={{height: '30rem'}}   />
      <div className="text-center" style={{marginTop: '5rem'}}>
        <h1 style={{ fontSize: '3.375rem', color: '#3c5724', textTransform: 'uppercase' }}> Zoo News</h1>
        <div style={{ fontSize: '1.5rem' }}>Here you can find all the latest news about Zoo Berlin and its animals – new babies,</div>
        <div style={{ fontSize: '1.5rem' }}>new conservation projects, progress on building projects, etc.</div>
      </div>
      <Container xs={3} md={4} className="col-md-6 mt-4">

        {news.map((item, idx) => {
          return (
            <Col key={idx}>
              <Card onClick={() => handleClick(item)}>
                <Card.Img variant="top" src={item.thumnail} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Title>{DateHelper.formatDate(item.releaseDate)}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Container>
      <Container fluid>
        <Row className="vh-20 d-flex justify-content-flex-end align-items-right m-3 pb-1 border-bottom">
          {/*Start search*/}
          {/*Search filter */}
          <Col md={3} >
            <Form.Group className="mb-3" controlId="search">
              <Form.Select
                value={searchBy}
                onChange={(e) => {
                  setSearchBy(e.target.value)
                }}
              >
                <option value={"ReleaseDate"}>Date</option>
              </Form.Select>
            </Form.Group>
          </Col>
          {/*Search filter */}
          {/*Search bar */}
          <Col >
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
          <Col  >
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
      </div>
    </>
  );

}

export default AllNews;