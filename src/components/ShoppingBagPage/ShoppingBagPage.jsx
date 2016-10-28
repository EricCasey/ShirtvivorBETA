import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import './shopping_bag_page.css';
import '../../../public/font-awesome/css/font-awesome.css';
import StripeCheckout from '../StripeCheckout/StripeCheckout.jsx';

class ShoppingBagPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
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



    render() {
        return (
            <div className="cart-items-container">
                <h2><i className="fa fa-shopping-bag" aria-hidden="true"></i> Shopping Bag</h2>

                <div id="checkout-card">
                    <div>
                        <h2>SUMMARY</h2>
                        <p>Subtotal: ${ (this.props.getSubtotal() / 100.00).toFixed(2) }</p>
                        <p>Taxes: ${ ((this.props.getSubtotal() / 100.00) * 0.13).toFixed(2) }</p>
                        <p>Shipping: ${ (this.props.cartList.length * 3.00).toFixed(2) }</p>
                        <p>Total: ${ ((this.props.getSubtotal() / 100) + ((this.props.getSubtotal() / 100) * 0.13) + (this.props.cartList.length * 3.00)).toFixed(2) } USD</p>
                    </div>

                    <div className="checkout-button">
                      <StripeCheckout
                          getSubtotal={this.props.getSubtotal}
                          cartList={this.props.cartList}
                      />
                    </div>
                    <img id="stripelogo"
                    role="presentation" src="https://2sorea2b9ama3o8i8o2afd7a-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/outline@3x.png" href="http://www.stripe.com"/>
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
                                <p>Designer: {product.user_id} </p>
                                <p>{product.description}</p>
                                <p>${product.price_cents / 100.00} USD</p>
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
