import React, { useEffect } from 'react'
import { Container, Row, Col,Card } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { selectedProducts } from '../../redux/actions/productsActions';
import { ProductCard } from './ProductCard';

const ProductList = () => {


    const product = useSelector(state => state.AllProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products');
            dispatch(selectedProducts(data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    console.log(product)
    return (
        <Container className='py-5'>
            <Row>
                {
                    product?.length >= 0 ? product?.map((item) => (
                        <ProductCard item={item} />
                    ))

                        :
                        <Col xl={12}>
                            <Card>
                                <Card.Body className='text-center'>
                                    <Card.Title>No Data Found</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                }
            </Row>
        </Container>
    )
}

export default ProductList;