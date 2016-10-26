import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import './shopping_bag_page.css';
import '../../../public/font-awesome/css/font-awesome.css';
import StripeCheckout from '../StripeCheckout/StripeCheckout.jsx';

class ShoppingBagPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedin: false
        }
    };

    // getSubtotal = (cart) => {
    //     let total = 0;
    //     this.props.cartList.forEach((product) => {
    //         total += product.price_cents;
    //     })
    //     return total;
    // }

    componentDidMount() {
        if (!localStorage.getItem('user')) {
            browserHistory.push('/login')
        }
    }

    stripeModal() {
      return (
        <form action="/your-server-side-code" method="POST">
          <script
            src="https://checkout.stripe.com/checkout.js" className="stripe-button"
            data-key="pk_test_QA6bIejb5MhL2m2PQkGb4M1N"
            data-amount="999"
            data-name="Demo Site"
            data-description="Widget"
            data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
            data-locale="auto"
            data-currency="cad">
          </script>
        </form>
      )
    }

    render() {
        return (
            <div className="cart-items-container">
                <h2><i className="fa fa-shopping-bag" aria-hidden="true"></i> Shopping Bag</h2>

                <div id="checkout-card">
                    <div>
                        <h2>SUMMARY</h2>
                        <p>Subtotal: ${this.props.getSubtotal()}</p>
                        <p>Shipping:
                        </p>
                        <p>TOTAL:
                        </p>
                    </div>

                    <div className="checkout-button">
                      <StripeCheckout
                      getSubtotal={this.props.getSubtotal}/>
                    </div>

                </div>
                <div id="line-items">
                    {this.props.cartList.map((product, index) => {
                        return (
                            <div className="cart-item" key={index}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                />
                                <p className="operator">+</p>
                                <img
                                    src='http://www.clker.com/cliparts/6/f/9/8/11971486291056358595DigitaLink_Blank_T-Shirt.svg.hi.png'
                                    alt={ product.name }
                                />

                                <p>
                                    <b>{product.name}</b>
                                </p>
                                <p>{product.description}</p>
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
