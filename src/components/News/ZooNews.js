import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Container, Pagination } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { DateHelper } from '../DateHelper';
import NewsPanda from '../../assets/NewsPan.jpg'


const AllNews = () => {

  const [news, setNews] = useState([])
  const [searchString,] = useState('')
  const [searchBy,] = useState('ReleaseDate')
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate()

  const handleNavigation = (item) => {
    navigate(`/news`, { state: { item: item } })
  }

  const handleClick = (item) => {
    handleNavigation(item);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  //#region Pagination
  let PaginationLoad = () => {
    let items = [];
    if (totalPages > 1) {
      for (let page = 1; page <= totalPages; page++) {
        items.push(<Pagination.Item key={page} onClick={onPaginationClick}>{page}</Pagination.Item>)
      }
    }
    return items;
  }

  const onPaginationClick = (e) => {
    setCurrentPage(e.target.text);
  }
  //#endregion

  useEffect(() => {
    fetch(`https://vietnamzoo.azurewebsites.net/api/News?pageNumber=${currentPage}&searchBy=${searchBy}&searchString=${searchString}`, {
      method: "GET",
      headers: {
        "content-type": "application/json; charset=UTF-8"
      }
    }).then(data => data.json())
      .then(data => {
        setNews(data.pagingList);
        setTotalPages(data.totalPages);
      }).catch(error => console.log(error))

  }, [currentPage, searchBy, searchString]);

  return (
    <>
      <div className='' style={{ backgroundColor: '#F7F1DB' }}>
        <Card.Img fluid src={NewsPanda} style={{ height: '30rem' }} />
        <div className="text-center" style={{ margin: '5rem' }}>
          <h1 style={{ fontSize: '3.375rem', color: '#3c5724', textTransform: 'uppercase' }}> Zoo News</h1>
          <div style={{ fontSize: '1.5rem' }}>Here you can find all the latest news about Zoo Berlin and its animals – new babies,</div>
          <div style={{ fontSize: '1.5rem' }}>new conservation projects, progress on building projects, etc.</div>
        </div>
        <Container fluid>
          <Row xs={1} md={3} className="g-4 p-5">
            {news.map((item, idx) => {
              return (
                <Col className="md-3" key={idx}>
                  <Card style={{ backgroundColor: '#3c5724', justifyContent: 'start', cursor: 'pointer' }} onClick={() => handleClick(item)}>
                    <Card.Img style={{ width: '100%', height: '343.15px' }} variant="top" src={item.thumnail} />
                    <Card.Body style={{ color: '#FFFFFF', flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
                      <Card.Title style={{ height: '4rem', overflow: 'hidden', textOverflow: 'inherit' }} >{item.title}</Card.Title>
                      <Card.Title style={{ lineHeight: '1.875rem' }} >{DateHelper.formatDate(item.releaseDate)}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
          <Row className="d-flex justify-content-center">
            <Pagination size="md" className="d-flex justify-content-center">
              {PaginationLoad()}
            </Pagination>
          </Row>
        </Container>
      </div>
    </>
  );

}

export default AllNews;