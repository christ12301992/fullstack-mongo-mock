import React from 'react';
import ProductList from './ProductList.jsx';
import ProductViewer from './ProductViewer.jsx';
import Search from './Search.jsx';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      current: {},
      clickToView: false
    }
    this.getProducts = this.getProducts.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios 
      .get('/products')
      .then((result) => this.setState({products: result.data}))
      .catch(err => console.error(err))

  }

  clickHandler(product) {
    this.setState({ clickToView: true })
    this.setState({ current: product }, () => console.log(this.state.current))
  }

  render(){

    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            { this.state.clickToView ? (<ProductViewer current={this.state.current}/>) : (<div/>) }
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList  products={this.state.products} clickHandler={this.clickHandler}/>
          </div>
        </div>
      </div>
    )
  }
}