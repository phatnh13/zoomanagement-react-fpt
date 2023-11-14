import React, { useState, useMemo } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { Input, Spin } from 'antd';
import GiraffeRun from '../../../assets/Giraffe-Run.mp4';
import './SearchOrder.css';
import { LoadingOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

const SearchOrder = () => {
    const location = useLocation();
    const LocorderId = location.state?.orderId;
    useMemo(() => {
        window.scrollTo({ top: 0 });
        if(LocorderId){
            fetch(`https://vietnamzoo.azurewebsites.net/api/Order/${LocorderId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((data) => data.json())
            .then((data) => {
                setOrderDetail(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsError(true); // Set isError to true
                setErrorMessage('Order ID does not exist.'); // Set the error message
                setIsLoading(false);
            });
        }
    }, [])

    const [orderId, setOrderId] = useState('');
    const [orderDetail, setOrderDetail] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onChange = (event) => {
        setOrderId(event.target.value);
    };

    const onSearch = () => {
        setIsLoading(true);
        setIsError(false); // Reset the error state
        setErrorMessage(''); // Reset the error message

        fetch(`https://vietnamzoo.azurewebsites.net/api/Order/${orderId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((data) => data.json())
            .then((data) => {
                setOrderDetail(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsError(true); // Set isError to true
                setErrorMessage('Order ID does not exist.'); // Set the error message
                setIsLoading(false);
            });
    };

    return (
        <div className="search-order-page__view vh-100">
            <div className="search-page__video-overlay vh-100"></div>
            <video src={GiraffeRun} autoPlay loop muted></video>
            <div className="search-page__box">
                <Container style={{ width: '60rem' }}>
                    <Row>
                        <h1 className="search-welcom-text">Check your Order by ID</h1>
                    </Row>
                    <Row>
                        <Input.Search
                            placeholder="Input your orderId"
                            value={orderId}
                            onChange={onChange}
                            onSearch={onSearch}
                            enterButton
                            style={{ width: '50%' }}
                        />
                    </Row>
                    {isLoading ? (
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
                    ) : isError ? (
                        <p style={{ color: 'red', fontSize: '2rem' }}>{errorMessage}</p>
                    ) : orderDetail ? (
                        // Render order details as before
                        <Row className="search-result-table">
                            <div className='mx-auto'>
                                <p style={{ fontWeight: 'bold' }}>Customer information: </p>
                                <p>Name: {orderDetail.custommer.name}</p>
                                <p>Phone: {orderDetail.custommer.phoneNumber}</p>
                                <p>Email: {orderDetail.custommer.email}</p>
                                {orderDetail.orderDetailResponses && orderDetail.orderDetailResponses.length > 0 ? (
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th className="text-align">Product Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderDetail.orderDetailResponses.map((response, index) => (
                                                <tr key={index}>
                                                    <td className="text-align">{response.ticket.ticketName}</td>
                                                    <td>{response.ticket.price === 0 ? (
                                                        <p>Free</p>
                                                    ) : (
                                                        <p>{response.ticket.price}</p>
                                                    )}</td>
                                                    <td>{response.quantity}</td>
                                                    <td>{response.totalPrice}</td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>{orderDetail.totalPrice}$</td>

                                            </tr>
                                        </tbody>
                                    </Table>
                                ) : (
                                    <p>No order details available.</p>
                                )}
                            </div>
                        </Row>
                    ) : null}
                </Container>
            </div>
        </div>
    );
};

export default SearchOrder;