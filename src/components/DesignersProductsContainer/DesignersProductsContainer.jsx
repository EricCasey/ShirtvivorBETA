import React, {Component} from 'react';
import '../ProductsContainer/products_container.css';

class DesignersProductsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designers: [],
      products: [] }
  };

  componentDidMount() {
    var invocation = new XMLHttpRequest();
    if (invocation) {
      fetch(`http://localhost:8080/api/products`)
          .then( result => {
            var blah = result.json()
            blah.then( products => {
              this.setState({ products: products });
              this.forceUpdate()
            });
          })
  };
}


  render() {
    return (
      // <div>
      // <p> this is the DesignersProductsContainer </p>
      // <p>{this.props.current_designer}</p>
      // <p>{this.props.updateDesigner}</p>
      // </div>


      <div className='productList'>
        {
          this.state.products.map( (product, index) => {
            return (
              <div className="product-item" key={index}>
                <p>Item: {product.name} </p>
                <div>
                  <img src='https://www.blacksocks.com/files/styles/blk_product_large/public/T-Shirt-Suzette-weiss_0.png?itok=d1sWT_ZC'  alt={product.name}/>
                </div>
                <p>Description: {product.description}</p>
                <p>Price: {product.price_cents}</p>

              </div>

            )
          })
        }
      </div>
    )
  }
}

export default DesignersProductsContainer
