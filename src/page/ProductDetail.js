import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let {id} = useParams()
  let [product,setProduct] = useState(null);
  const getProductDetail=async () =>{
    let url = `http://localhost:5005/products/${id}`
    let resopnse = await fetch(url);
    let data = await resopnse.json();
    setProduct(data)
  }

  useEffect(()=>{
    getProductDetail()
  },[])

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img}/>
        </Col>
        <Col className='product-content'>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <Dropdown className='mb-2'>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="d-grid gap-2">
            <Button variant="primary" size="mi">
              추가
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail