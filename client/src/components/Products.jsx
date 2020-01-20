import React from 'react';
  
const Products = (props) => {
   return(
    <div className='product-list-entry'>
      <img className="listimages" src={props.product.image}/>
      <div className='product-list-entry-title' onClick={() => props.clickHandler(props.product)}>{props.product.item}
        <div className='product-list-entry-detail'>Current Bid: {props.product.curr_bid}<br/>
        Bid Ends in {props.product.ends_in} day(s)</div> 
      </div>
    </div>
  )
}

export default Products