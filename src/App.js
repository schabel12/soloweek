// import React, { Component } from 'react';
// import logo from './foodieLogo.png';
import './App.css';
import axios from 'axios';
// import ProductList from './productList.jsx'
import testData from './testData.js';
import React, {Component} from 'react';
import Products from './Products';
import {
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Nav from './Nav';
import UserSettings from './UserSettings';

class App extends Component {
  constructor(props){
    super(props)
    this.onSearch = this.onSearch.bind(this)
    this.onChange = this.onChange.bind(this)
    this.like = this.like.bind(this)
    this.dislike = this.dislike.bind(this)
    this.state = {
      products: testData,
      searchTerm: '',
      loggedIn: false,
      user: '',
      productRating: '',
    }
  }

  onChange(e){
    this.setState({
      searchTerm: e.target.value
    }, () => console.log(this.state.searchTerm))
  }

  onSearch(){
    axios.get('/findFood', {params: this.state.searchTerm})
    .then(
      (response) => {
      console.log('response is...', response.data)
      this.setState({
        products: response.data,
      }, () => {console.log('products are now...', this.state.products)}
      )}
    )
    .catch((e) => {
      console.log('error:', e)
    })
  }

  like(e){
    console.log('target value is...', e.target.value)
    axios.post('/likeProduct', {params: e.target.value})
    .then(
      (response) => {
        console.log('response is...', response.data);
      }
    )
    .catch((err) => {
      console.log('error liking...', err);
    })
  }

  dislike(e){
    axios.post('/dislikeProduct', {params: e.target.value})
    .then(
      (response) => {
        console.log('response is...', response.data);
      }
    )
    .catch((err) => {
      console.log('error liking...', err);
    })
  }

  render(){
    return(
      <Router>
        <div>
          <ul>
            <li><Link to="/products">Products</Link></li>
          </ul>
          <hr/>
          <Route path="/" render={(props) => <Nav {...props} search={this.onSearch} term={this.state.searchTerm} change={this.onChange}/>}
          />
          <Route path='/products' render={(props) => <Products {...props} data={this.state.products.items}/>}
          /> 
          <Route path="/user_settings" render={(props) => <UserSettings {...props}/>}
          />
          {this.state.products.items.map((item)=>{
            return(
              <div> 
                <Route exact path={`/${item.productId}/product/detail`} render={(props) => <ProductDetail {...props} like={this.like} dislike={this.dislike} item={item}/>} />
              </div>
            )
          })}
          </div>
          </Router>
        )
      }
      
    }
    
    export default App;
    // <Route exact path={`${item.productId}/product/detail`} render={() => <div>hello</div>}
    
    // convenient inline rendering
    // <Route path="/home" render={() => <div>Home</div>}/>
    

