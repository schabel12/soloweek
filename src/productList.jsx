import React, { Component } from 'react';


class ProductList extends Component {
    constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
    this.state = {

    }
  }


  onClick(){
      
  }

  render(){
      return this.props.products.map((item, key) =>{
        return (
            <div className="productListing" onClick={this.onClick}>
                <img className="productImage" src={item.image} alt='' height="200"/>
                <h2 className="productTitle">{item.title}</h2>
                <p className="rating">rating placeholder</p>
                <p className="ingredientList"></p>
                <p className="vegetarianStatus"></p>
                <p className="veganStatus"></p>
                <p className="ingredientAlert"></p>
            </div>
          )
      })
  }
}

export default ProductList;