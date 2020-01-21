import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentBid: 0,
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
    this.setState({bidChange: false})
  }
  
  getProduct() {
    this.props.getProducts();
  }

  submitHandler(event) {
    event.preventDefault();
    var inputVal = document.getElementById("newBid").value;
    if (inputVal < this.props.current.curr_bid) {
      alert(`${inputVal} is not a valid bid, please input a valid price and submit again.`);
    } else {
      alert(`Thank you for your bid of $${inputVal}!`);
      var obj = {};
      obj.curr_bid = inputVal;
      axios
        .put(`/products/${this.props.current._id}`, obj)
        .then(() => this.getProduct())
        .catch(err => console.error(err))
      this.setState({ 
        currentBid: inputVal, 
      })
      document.getElementById('form').reset();
      this.props.resetBidChange();
    }
  }
  
  render(){
    return(
      <div className = 'product-viewer'>
        <img src={this.props.current.image}/>
        <h2 style={{fontWeight:'bold'}}>{this.props.current.item}</h2>
        <div className='product-viewer-details'>
          <span>&nbsp;&nbsp;</span>
          { this.props.bidChange ? ( <div style={{fontWeight:'bold'}}>Current Bid: ${this.state.currentBid}</div> ) : (
           <div style={{fontWeight:'bold'}}>Current Bid: ${this.props.current.curr_bid}</div> ) }
          <span>&nbsp;&nbsp;</span>
          <div style={{fontWeight:'bold'}}>Original Posting Price: ${this.props.current.min_cost}</div>
          <span>&nbsp;&nbsp;</span>
          <div style={{fontWeight:'bold'}}>Bidding Ends in: {this.props.current.ends_in} day(s)</div>
          <span>&nbsp;&nbsp;</span>
          <form onSubmit={this.submitHandler} id="form">
            <label>New Bid:
            <input id="newBid" type="text" name="name"/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}