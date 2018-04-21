import React from 'react';
import ProductDetail from './ProductDetail.js';
import {
    Link
  } from 'react-router-dom';

const Products = (props) =>(
    <div>
        {props.data.map((item, key) => {
            return (
                <div className="productListing">
                <hr/>
                    <Link to={`${item.title}/product/detail`}>
                        <img className='productImage' src={item.image} height="200px"/>
                        <h2>{item.title}</h2>
                        <p className="rating">rating placeholder</p>
                        <p className="ingredientList">{item.ingredients}</p>
                        <p className="vegetarianStatus">vagetarian</p>
                        <p className="veganStatus">vegan</p>
                        <p className="ingredientAlert">true or false: {(item.ingredients.split(' ').includes('corn')).toString()}</p>
                    </Link>
                </div>
            )
        }
        )}
    </div>
  )

export default Products;