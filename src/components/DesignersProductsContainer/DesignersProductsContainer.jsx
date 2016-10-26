import React, {Component} from 'react';
// import '../ProductsContainer/products_container.css';
import './designers-products-container.css'

class DesignersProductsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designers: '',
      products: [] }
  };

  componentDidMount() {

  }

  handleOnClick = (value) => {
    this.props.updateCart(value);
  }

  render() {
    return (

      <div className='product-container-list'>
        {
          this.props.products.map( (product, index) => {
            return (
              <div className="product-container-item" key={index}>
                <div>
                  <img src='https://www.blacksocks.com/files/styles/blk_product_large/public/T-Shirt-Suzette-weiss_0.png?itok=d1sWT_ZC'  alt={product.name}/>
                </div>
                <p><b>{product.name}</b></p>
                <p>{product.description}</p>
                <p>${product.price_cents}</p>
                <div
                  className="product-cart-button"
                  onClick={this.handleOnClick.bind(this, product)}>
                    ADD TO BAG
                </div>
              </div>

            )
          })
        }
      </div>
    )
  }
}

export default DesignersProductsContainer
