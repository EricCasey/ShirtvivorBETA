import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import './shopping_bag_page.css';

class ShoppingBagPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin : false,
    }
  };


  componentDidMount() {
    if (!localStorage.getItem('user')) {
      browserHistory.push('/login')
    }
  }

  render() {
    return (
      <div>
        <div>
        {
          this.props.cartList.map( (product, index)  => {
            return (
              <div className="cart-items-container" key={index}>
                <p><b>{product.name}</b></p>
                <p>${product.price_cents}</p>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}
export default ShoppingBagPage