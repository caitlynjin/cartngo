import React from 'react'
import thumbnail from '../assets/airpods.png'
import '../App.css'
import { Rate } from 'antd';

const Product = () => {
  return (
    <div className="product">
      <img src={thumbnail} alt="image" style={{ maxWidth: 200, maxHeight: 200 }}/>
      <h3>iPhone 9</h3>
      <h4>$549</h4>
      <Rate allowHalf disabled defaultValue={2.5} style={{ fontSize: 16 }} />
    </div>
  )
}

export default Product