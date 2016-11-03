import React, {Component} from 'react';
import './products_container.css';

  class ProductsContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        products: [],
        userVotes: 3
      }
    };

    getVotes() {
      console.log(this.state.userVotes)
    }
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

    handleVoteClick = (product) => {
      this.updateUserVotes(product)
      fetch(`http://localhost:8080/api/add-vote/${product.id}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          this.state.products
      )
      }).then( result => {
          var results = result.json()
          results.then( products => {
            this.setState({ products: products });
            this.forceUpdate()
          });
      })
    }

    updateUserVotes = (products) => {
      if(this.state.userVotes === 0)  // or if the users votes are 0

      { return
      } else {
      this.setState({ userVotes: this.state.userVotes-1 })
    }
    }

  render() {
    return (
      <div className="home-page-container">

        <div className="vote-message">
          <b>Vote on your favourite design to have it added to the store!
            <p>Use your votes carefully, you're only allowed 3 per week.</p>
            <p>Votes Left: {this.state.userVotes}</p>
          </b>
        </div>

        <div className="productList">
          {
            this.state.products.map( (product, index) => {
              return (
                <div className="product-item" key={index}>
                  <p className="designer-id"><b>{ product.name }</b></p>
                  <div className="shirt-container">
                    <div className="ink">
                      <img src={ product.image }
                      alt={ product.name } />
                    </div>
                    <img src='http://www.clker.com/cliparts/6/f/9/8/11971486291056358595DigitaLink_Blank_T-Shirt.svg.hi.png'  alt={ product.name }/>
                  </div>
                  <p>Votes: { product.votes }</p>
                  <div className="vote-button" onClick={ this.handleVoteClick.bind(this, product) }>VOTE</div>
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
