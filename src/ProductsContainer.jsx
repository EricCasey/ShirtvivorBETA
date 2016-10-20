import React, {Component} from 'react';
import '../public/styles/products_container.css';

  class ProductsContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {   }
    };

    render() {
      return (

<div className='productList'>

{
  this.props.products.map( (product, index) => {
  return <div key={index} className="product-item">
    <p>Item: {product.name} </p>
    <img src={product.image}  alt={product.name}/>
    <p>Description: {product.description}</p>
    <p>Price: {product.price}</p>
  </div>
})}



</div>


      )
    }
  }
  export default ProductsContainer
