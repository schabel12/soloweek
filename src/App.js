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
const { Client } = require('pg');
const client = new Client()

await client.connect()

const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()


class App extends Component {
  constructor(props){
    super(props)
    this.onSearch = this.onSearch.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state = {
      products: testData,
      searchTerm: '',
      loggedIn: false,
      user: '',

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
                <Route exact path={`/${item.productId}/product/detail`} render={(props) => <ProductDetail {...props} item={item}/>} />
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
    
// // wrapping/composing
// const FadingRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     <FadeIn>
//       <Component {...props}/>
//     </FadeIn>
//   )}/>
// )

// <FadingRoute path="/cool" component={Something}/>


// <Route path="/product/detail" render={(props) => <ProductDetail {...props}/>} 

// class App extends Component {
//   constructor(props){
//   super(props)
//   this.onChange = this.onChange.bind(this)
//   this.onClick = this.onClick.bind(this)
//   this.onSearch = this.onSearch.bind(this)
//   this.state = {
//       products: testData.items,
//       view: 'home',
//       search: '', 
//       response: '' 
//   }
// }
  

//   componentDidMount() {

//   };



//   onClick(e) {
//     // var viewChange = e.target.value
//     this.setState({
//       view: e.target.value
//     }, () => {console.log('your view has been changed to ', this.state.view)})
//   }

//   onChange(e){
//     // var inputVal = e.target.value
//     this.setState({
//       search: e.target.value
//     }, () => {console.log(this.state.search)})
//   }

//   onSearch(e){
//     axios.get('/findFood', {params: e.target.value})
//     .then(
//       (response) => {
//       console.log('response is...', response.data)
//       this.setState({
//         products: response.data.result,
//       }, () => {console.log('products are now...', this.state.products)}
//       )}
//     )
//     .catch((e) => {
//       console.log('error:', e)
//     })
//   }

//   render() {
//     console.log(this.state.products);
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Foodie Food Reviews</h1>
//           <div className="App-search">
//             <input value = {this.state.search} onChange = {this.onChange}></input>
//             <button value = {this.state.search} onClick = {this.onSearch}>Search for Food</button>
//           </div>
//         </header>
//         <div>
//         <p className="App-intro">{this.state.response}</p>
//         </div>
//         <ProductList products={this.state.products}/>
//       </div>
//     );
//   }
// }

// export default App;
