import React from 'react';
// import ProductDetail from './ProductDetail.js';
import {
    Link
  } from 'react-router-dom';

const Products = (props) =>(
    <div>
        {props.data.map((item, key) => {
            return (
                <div className="productListing">
                <hr/>
                    <Link to={`${item.productId}/product/detail`}>
                        <img className='productImage' alt='' src={item.image} height="200px"/>
                        <h2>{item.title}</h2>
                    </Link>
                </div>
            )
        }
        )}
    </div>
  )

export default Products;