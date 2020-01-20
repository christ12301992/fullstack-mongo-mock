import React from 'react';
import Products from './Products.jsx';
  
const ProductList = (props) => {
   return(
    <div className='product-list'>
      Current Products:{ props.products.map((product, index) => <Products product={product} key={index} clickHandler={props.clickHandler}/>) }
    </div>
  )
}

export default ProductList