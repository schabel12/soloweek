import React from 'react';

export const Header = (props) => {
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="home"></a>Home</li>
                        <li><a href="user"></a>User</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Foodie Food Reviews</h1>
//   <div className="App-search">
//     <input value = {this.state.search} onChange = {this.onChange}></input>
//     <button value = {this.state.search} onClick = {this.onSearch}>Search for Food</button>
//   </div>
// </header>
// <div>
// <p className="App-intro">{this.state.response}</p>
// </div>
// <ProductList products={this.state.products}/>
// </div>