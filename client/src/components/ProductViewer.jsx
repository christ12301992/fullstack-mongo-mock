import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentBid: this.props.current.curr_bid
    }
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    var inputVal = document.getElementById("newBid").value;
    if (inputVal < this.state.currentBid) {
      alert(`${inputVal} is not a valid bid, please input a valid price and submit again.`)
    } else {
      alert(`Thank you for your bid of $${inputVal}!`)
    }
  }
  
  render(){
    return(
      <div className = 'product-viewer'>
        <img src={this.props.current.image}/>
        <h2 style={{fontWeight:'bold'}}>{this.props.current.item}</h2>
        <div className='product-viewer-details'>
          <span>&nbsp;&nbsp;</span>
          <div style={{fontWeight:'bold'}}>Current Bid: {this.props.current.curr_bid}</div>
          <span>&nbsp;&nbsp;</span>
          <div style={{fontWeight:'bold'}}>Original Posting Price: {this.props.current.min_cost}</div>
          <span>&nbsp;&nbsp;</span>
          <div style={{fontWeight:'bold'}}>Bidding Ends in: {this.props.current.ends_in} day(s)</div>
          <span>&nbsp;&nbsp;</span>
          <form onSubmit={this.submitHandler}>
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