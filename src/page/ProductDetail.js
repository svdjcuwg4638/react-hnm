import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productAction } from '../redux/actions/productAction'

const ProductDetail = () => {
  const dispatch = useDispatch()
  let product = useSelector(state => state.product.product)
  let {id} = useParams()
  const getProduct = async ()=>{
    dispatch(productAction.getProductDetail(id))
  }

  useEffect(()=>{
    getProduct()
  },[id])

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