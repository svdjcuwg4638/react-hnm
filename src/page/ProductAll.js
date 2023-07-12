import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from '../component/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams } from 'react-router-dom';
import {productAction} from "../redux/actions/productAction"
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  const productList = useSelector(state => state.product.productList)
  const [query,setQuery] = useSearchParams();
  const dispatch = useDispatch()
  const getProducts = async ()=>{
    let searchQuery = query.get('q') || ''
    dispatch(productAction.getProducts(searchQuery))
  }

  useEffect(()=>{
    getProducts()
  },[query])

  return ( 
    <div>
      <Container>
          <Row>
            {productList.map(menu=>(
              <Col lg="3">
                <ProductCard item={menu}/>
              </Col>
            ))}
          </Row>
      </Container>
    </div>
  )
}

export default ProductAll