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
    this.addAlert = this.addAlert.bind(this)
    this.state = {
      products: testData,
      searchTerm: '',
      loggedIn: false,
      user: '',
      productRating: '',
      alerts: []
    }
  }

  onChange(e){
    this.setState({
      searchTerm: e.target.value
    })
  }

  onSearch(){
    axios.get('/findFood', {params: this.state.searchTerm})
    .then(
      (response) => {
      this.setState({
        products: response.data,
      })
    })
    .catch((e) => {
      console.log('error:', e)
    })
  }

  addAlert(e){
    var checkAlert = this.state.alerts.slice()
    if (checkAlert.includes(e.target.value)) {
      checkAlert.splice(checkAlert.indexOf(e.target.value), 1)
    } else {
      checkAlert.push(e.target.value)
    }
    this.setState({
      alerts: checkAlert
    }, () => console.log(this.state.alerts))
  }

  like(e){
    axios.post('/likeProduct', {params: e.target.value})
    .then(
      (response) => {
        console.log('got response from like');
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
        console.log('got response from dislike');
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
          <Route path='/products' render={(props) => <Products {...props} alerts={this.state.alerts} data={this.state.products.items}/>}
          /> 
          <Route path="/user_settings" render={(props) => <UserSettings {...props} addAlert={this.addAlert}/>}
          />
          {this.state.products.items.map((item)=>{
            return(
              <div> 
                <Route exact path={`/${item.productId}/product/detail`} render={(props) => <ProductDetail {...props} like={this.like} alerts={this.state.alerts} dislike={this.dislike} item={item}/>} />
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
    

