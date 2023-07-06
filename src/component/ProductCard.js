import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
  const naviGate = useNavigate();
  const showDetail = ()=>{
    naviGate(`/products/${item.id}`)
  }
  return (
    <div onClick={showDetail}>
      <img src={item?.img} />
      <div>{item?.title}</div>
      <div>Consious choce</div>
      <div>${item?.price}</div>
      <div>{item?.new ==true?"신제품":""}</div>
    </div>
  );
}

export default ProductCard