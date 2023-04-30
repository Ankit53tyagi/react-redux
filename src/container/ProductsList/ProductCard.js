import React, { useState } from 'react'
import { Col, Card,ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ProductCard = ({ item }) => {
    const [read, setRead] = useState(3)

    return (
        <Col xl={3} className='mb-4'>
            <Card className='h-100'>
                <Link to={`product/${item?.id}`}><Card.Img variant="top" src={item?.image} style={{ width: '100%', height: '200px', objectFit: 'contain', padding: 15, borderBottom: '1px solid #ddd' }} /></Link>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description.substring(0, item?.description.length / read)} {read == 3 ? <Link onClick={() => setRead(0)}>Read More</Link> : <Link onClick={() => setRead(3)}>Read Less</Link>}</Card.Text>
                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item><strong>Price</strong> : {item?.price}</ListGroup.Item>
                    <ListGroup.Item><strong>Category</strong> : {item?.category}</ListGroup.Item>
                    <ListGroup.Item><strong>Rating</strong> : {item?.rating?.rate}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Link class="card-link" to={`product/${item?.id}`}>View</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}
