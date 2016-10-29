import React, {Component} from 'react';
import './products_container.css';

  class ProductsContainer extends Component {
    constructor(props) {
      super(props);
      this.state = { users: [] }
    };

    componentDidMount() {
      var invocation = new XMLHttpRequest();
      if (invocation) {
        fetch(`http://localhost:8080/api/submissions`)
            .then( result => {
              var blah = result.json()
              blah.then( users => {
                this.setState({ users: users });
                this.forceUpdate()
              });
            })
      };
    }

  render() {
    return (
      <div className="home-page-container">

        <div className="vote-message">
          <b>Vote on your favourite design to have it added to the store!</b>
        </div>

        <div className="productList">
          {
            this.state.users.map( (users, index) => {
              return (
                <div className="product-item" key={index}>
                  <p className="designer-id"><b>{users.username}</b></p>
                  <div className="shirt-container">
                      <img src={users.image_submission}
                      alt={users.name}
                      className="ink" />
                    <img src='http://www.clker.com/cliparts/6/f/9/8/11971486291056358595DigitaLink_Blank_T-Shirt.svg.hi.png'  alt={users.name}/>
                  </div>
                  <p>Votes: 0</p>
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
