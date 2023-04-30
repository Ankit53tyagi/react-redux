import axios from 'axios';
import React, { useEffect } from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { selectedProduct } from '../../redux/actions/productsActions';
import { useDispatch, useSelector } from 'react-redux'

const ProductDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { Product } = useSelector(state => state);
    const { title, price, description, category, image, rating } = Product
    const params = useParams();
    const { id } = params;

    const FetchSingleList = async (id) => {
        try {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
            dispatch(selectedProduct(data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        FetchSingleList(id);
    }, [id])


    return (
        <Container className='py-5'>
            <Link className='btn btn-secondary mb-2 rounded-lg' onClick={() => navigate(-1)}>Back</Link>
            {
                Object.keys(Product).length === 0 ? <span>Loading</span> :
                    <Row>
                        <Col xl={6}>
                            <img src={image} alt='product' className='border w-100' style={{ height: '370px', objectFit: 'contain', padding: 20 }} />
                        </Col>
                        <Col xl={6}>
                            <div className='py-3 px-2'>
                                <h3>{title}</h3>
                                <small className='text-secondary'><strong>{String(category).toUpperCase()}</strong></small>
                                <hr />
                                <p>{description}</p>
                                <ListGroup variant="flush" className='border w-75'>
                                    <ListGroup.Item><strong>Price</strong> : {price}</ListGroup.Item>
                                    <ListGroup.Item className='justify-content-between d-flex'><span><strong>Rating</strong> : {rating?.rate}</span> <span><strong>Count</strong> : {rating?.count}</span></ListGroup.Item>
                                </ListGroup>
                                <Link className='btn btn-primary mt-2 rounded-lg'>Add to cart</Link>
                            </div>
                        </Col>
                    </Row>
            }
        </Container>
    )
}

export default ProductDetails