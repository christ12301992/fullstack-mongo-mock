import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  
  render(){
    return(
      <div className = 'product-viewer'>
        <img src={this.props.current.image}/>
        <h2 style={{fontWeight:'bold'}}>{this.props.current.item}</h2>
        <div className='product-viewer-details'>
          <div style={{fontWeight:'bold'}}>Current Bid: {this.props.current.curr_bid}</div>
          <div style={{fontWeight:'bold'}}>Original Posting Price: {this.props.current.min_cost}</div>
          <div style={{fontWeight:'bold'}}>Bidding Ends in: {this.props.current.ends_in} day(s)</div>
          <form>
            <label>New Bid:
            <input type="text" name="name"/>
            </label>
            <input type="submit" value="Submit"/>

          </form>
        </div>
      </div>
    )
  }
}