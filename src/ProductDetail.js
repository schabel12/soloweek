import React from 'react';
import {
    Route,
    Link,
    BrowserRouter as Router,
  } from 'react-router-dom';


const ProductDetail = (props) => (
    <div>
    <img src={props.item.image} height="200px"/>
        <p>{props.item.title}</p>

        <p>Rate this product:</p>
        
        <p>write your review:</p>
        <textarea className="review-input" rows="4" cols="50">
        </textarea>      
        <p>User Reviews Placeholder</p>

      <p></p>
    </div>
  )
  
export default ProductDetail;