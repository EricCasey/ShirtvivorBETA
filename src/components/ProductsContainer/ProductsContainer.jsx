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
        fetch(`http://localhost:8080/api/notproducts`)
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

      <div className="productList">
      <div className="product-item">
        <h2>Applicant Designs</h2>
        <p>Vote for your favourite design!</p>
        <p>-or-</p>
        <p><a href="#">Submit your own design</a></p>
      </div>
        {
          this.state.products.map( (product, index) => {
            return (
              <div className="product-item" key={index}>
              <img className="profileImg" src="http://i.imgur.com/HpStImm.jpg" role="presentation"/>
              <p className="designer-id">user_id: {product.user_id}</p>
                <p className="design-title">{product.name}</p>
                <div className="shirt-container">
                    <img src={product.image}
                    alt={product.name}
                    className="ink" />
                  <img src='http://www.clker.com/cliparts/6/f/9/8/11971486291056358595DigitaLink_Blank_T-Shirt.svg.hi.png'  alt={product.name}/>
                </div>
                <p className="desc">{product.description}</p>
                <p>Vote: UP || DOWN</p>
              </div>
            )
          })
        }
      </div>

    )
  }
}
export default ProductsContainer
