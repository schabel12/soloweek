import React, {Component} from 'react';
import {
    Route,
    Link,
    BrowserRouter as Router,
  } from 'react-router-dom';
import axios from 'axios';


class ProductDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      productRating: ''
    }
    this.getRating = this.getRating.bind(this)
  }
  
  componentDidMount(){
    this.getRating(this.props.item.title)
  }

  getRating(productTitle) {
    console.log('productTitle is...', productTitle)
    axios.get('/productRating', {params: productTitle})
    .then((response)=> {
      console.log('response is...', response.data);
      this.setState({
        productRating: response.data
      })
    })
  }

    render() {
    return (
      <div>
      <img src={this.props.item.image} height="200px"/>
          <p>{this.props.item.title}</p>
          <div className="rating">
            {this.state.productRating}
          </div>
          <div>
            {this.props.alerts.map((ingredient) => {
              if (this.props.item.ingredients.includes(ingredient)){
                return (
                  <div className="alerts">
                    Contains {ingredient}
                  </div>
                )
              }})
            }
          </div>
          <p>Rate this product:</p>
          <button value={this.props.item.title} onClick={this.props.like}>I like it</button>
          <button value={this.props.item.title} onClick={this.props.dislike}>I don't like it</button>

        <p></p>
      </div>
    )
  }
}
  
export default ProductDetail;