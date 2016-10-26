import React, {Component} from 'react';
import './products_container.css';

  class ProductsContainer extends Component {
    constructor(props) {
      super(props);
      this.state = { products: [] }
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
      <div className='productList'>
        {
          this.state.products.map( (product, index) => {
            return (
              <div className="product-item" key={index}>
                <p>Item: {product.name} </p>
                <div className="shirt-container">
                    <img src={product.image}
                    alt={product.name}
                    className="ink" />
                  <img src='http://www.clker.com/cliparts/6/f/9/8/11971486291056358595DigitaLink_Blank_T-Shirt.svg.hi.png'  alt={product.name}/>
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

    // render() {
    //   return (
    //
    //     <div className='productList'>
    //
    //       {
    //         this.state.products.map( (product, index) => {
    //         return <div key={index} className="product-item">
    //           <p>Item: {product.name} </p>
    //           <div><img src={product.image}  alt={product.name}/></div>
    //           <p>Description: {product.description}</p>
    //           <p>Price: {product.price_cents}</p>
    //           <p>{this.state.products}</p>
    //         </div>
    //
    //         })
    //       }
    //
    //
    //
    //     </div>
    //
    //
    //   )
    // }



  }
  export default ProductsContainer
