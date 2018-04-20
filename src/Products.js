import React from 'react';
import ProductDetail from './ProductDetail.js';
import {
    Route,
    Link,
    BrowserRouter as Router,
  } from 'react-router-dom';

const Products = (props) =>(
    <div>
        {props.data.map((item, key) => {
            return (
                <div className="productListing">
                <hr/>
                    <Link to={`${item.name}/product/detail`}>{item.name}</Link>
                    <img className='productImage' src={item.image} height="200px"/>
                    <h2>{item.title}</h2>
                    <p className="rating">rating placeholder</p>
                    <p className="ingredientList">{item.ingredients}</p>
                    <p className="vegetarianStatus">vagetarian</p>
                    <p className="veganStatus">vegan</p>
                    <p className="ingredientAlert">true or false: {(item.ingredients.split(' ').includes('corn')).toString()}</p>
                </div>
            )
        }
        )}
    </div>
  )

export default Products;

// <Link to='/product/detail'>ProductDetailsLink</Link>
// <h2>products</h2>
// <div className="productListing" >
//   <img className="productImage" />
//   <h2 className="productTitle">item.title</h2>
//   <p className="rating">rating placeholder</p>
//   <p className="ingredientList">ingredientList</p>
//   <p className="vegetarianStatus">vagetarian</p>
//   <p className="veganStatus">vegan</p>
//   <p className="ingredientAlert">ingredientAlert</p>
// </div>
// </div>