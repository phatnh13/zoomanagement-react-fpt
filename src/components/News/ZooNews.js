import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { DateHelper } from '../DateHelper';
import NewsPanda from '../../assets/NewsPan.jpg'


const AllNews = () => {

  const [news, setNews] = useState([])
  const [searchString,] = useState('')
  const [searchBy,] = useState('ReleaseDate')
  const [currentPage,] = useState(1);
  const [, setTotalPages] = useState(0);
  const navigate = useNavigate()

  const handleNavigation = (item) => {
    console.log("Navigarun");
    navigate(`/news`, { state: { item: item } })
  }

  const handleClick = (item) => {
    console.log(item)
    handleNavigation(item);
  }

  useEffect(() => {
    fetch(`https://vietnamzoo.azurewebsites.net/api/News?pageNumber=${currentPage}&searchBy=${searchBy}&searchString=${searchString}`, {
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
      <div className='' style={{ backgroundColor: '#F7F1DB' }}>
        <Card.Img fluid src={NewsPanda} style={{ height: '30rem' }} />
        <div className="text-center" style={{ margin: '5rem' }}>
          <h1 style={{ fontSize: '3.375rem', color: '#3c5724', textTransform: 'uppercase' }}> Zoo News</h1>
          <div style={{ fontSize: '1.5rem' }}>Here you can find all the latest news about Zoo Berlin and its animals – new babies,</div>
          <div style={{ fontSize: '1.5rem' }}>new conservation projects, progress on building projects, etc.</div>
        </div>
        <Row xs={1} md={3} className="g-4 p-5">

          {news.map((item, idx) => {
            return (
              <Col className="md-3" key={idx}>
                <Card style={{ backgroundColor: '#3c5724', justifyContent: 'start', cursor: 'pointer' }} onClick={() => handleClick(item)}>
                  <Card.Img style={{ width: '100%', height: '343.15px' }} variant="top" src={item.thumnail} />
                  <Card.Body style={{ color: '#FFFFFF' }}>
                    <Card.Title style={{
                      height: '2.5rem'
                    }} >{item.title}</Card.Title>
                    <Card.Title >{DateHelper.formatDate(item.releaseDate)}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    </>
  );

}

export default AllNews;