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
                <div className="shirt-container">
                    <img src={product.image}
                    alt={product.name}
                    className="ink" />
                  <img src='http://www.clker.com/cliparts/6/f/9/8/11971486291056358595DigitaLink_Blank_T-Shirt.svg.hi.png'  alt={product.name}/>
                </div>
                <p><b>{product.name}</b></p>
                <p>{product.description}</p>
                <p>${product.price_cents/100}</p>
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
