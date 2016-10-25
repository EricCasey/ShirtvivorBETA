import React, {Component} from 'react';
import '../ProductsContainer/products_container.css';

class DesignersProductsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designers: '',
      products: [] }
  };

  componentDidMount() {

}

  render() {
    return (

      <div className='productList'>
        {
          this.props.products.map( (product, index) => {
            return (
              <div className="product-item" key={index}>
                <p>Item: {product.name}</p>
                <div>
                  <img src='https://www.blacksocks.com/files/styles/blk_product_large/public/T-Shirt-Suzette-weiss_0.png?itok=d1sWT_ZC'  alt={product.name}/>
                </div>
                <p>Description: {product.description}</p>
                <p>Price: {product.price_cents}</p>
                <div> Add 2 Cart </div>
              </div>

            )
          })
        }
      </div>
    )
  }
}

export default DesignersProductsContainer
