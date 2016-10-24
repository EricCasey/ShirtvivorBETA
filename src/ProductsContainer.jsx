import React, {Component} from 'react';
import '../public/styles/products_container.css';

  class ProductsContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {   }
    };

    componentDidMount() {
      var invocation = new XMLHttpRequest();
      if (invocation) {
        fetch(`http://localhost:8080/api/products`)
            .then( result => {
              var blah = result.json()
              console.log(blah);
              console.log(this.state)
                this.setState({ products : result.json() });

            }).then(console.log(this.state.products));
    };
  }


    render() {
      return (

<div className='productList'>

{
  this.props.products.map( (product, index) => {
  return <div key={index} className="product-item">
    <p>Item: {product.name} </p>
    <div><img src={product.image}  alt={product.name}/></div>
    <p>Description: {product.description}</p>
    <p>Price: {product.price}</p>
    <p>{this.state.products}</p>
  </div>

})}



</div>


      )
    }
  }
  export default ProductsContainer
