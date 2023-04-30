import axios from 'axios';
import React, { useEffect } from 'react'
import { Container,Row,Col, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../../redux/actions/productsActions';

const ProductDetails = () => {

    const params = useParams();
    const {id} =  params;

    const FetchSingleList = async (id) =>{
        try{
            const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
            console.log(data)
            selectedProduct(data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        FetchSingleList(id);
    },[id])


  return (
    <Container className='py-5'>
        <Row className='border'>
            <Col xl={6}>
                <img src='' alt='product' className='border w-100' style={{height:'200px'}} />
            </Col>
            <Col xl={6}>
                <div>
                    <h2>Title</h2>
                    <p>description</p>
                    <ListGroup variant="flush" className='border'>
                    <ListGroup.Item><strong>Price</strong> : </ListGroup.Item>
                    <ListGroup.Item><strong>Category</strong> : </ListGroup.Item>
                    <ListGroup.Item><strong>Rating</strong> : </ListGroup.Item>
                </ListGroup>   
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetails