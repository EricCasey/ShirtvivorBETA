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
        fetch(`http://localhost:8080/api/submissions`)
            .then( result => {
              var results = result.json()
              results.then( products => {
                this.setState({ products: products });
                this.forceUpdate()
              });
            })
      };
    }

  render() {

    return (

      <div id="home-page-container" className="home-page-container">

        <div className="vote-message">
          <b>Vote on your favourite design to have it added to the store!</b>
        </div>

        <div className="productList">
          {
            this.state.products.map( (products, index) => {
              return (
                <div className="product-item" key={index}>
                  <p className="designer-id"><b>{ products.name }</b></p>
                  <div className="shirt-container">
                      <img src={ products.image }
                      alt={ products.name }
                      className="ink" />
                    <img src='http://www.clker.com/cliparts/6/f/9/8/11971486291056358595DigitaLink_Blank_T-Shirt.svg.hi.png'  alt={products.name}/>
                  </div>
                  <p>Votes: { products.votes }</p>
                  <div className="vote-button">VOTE</div>
                </div>
              )
            })
          }
        </div>
      </div>

    )
  }
}
export default ProductsContainer
