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
            <div className="shopping-bag-container">
                <div className="shopping-bag-header">
                    <div className="shopping-bag-header-content">
                        <div className="shopping-bag-icon">
                            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                        </div>
                        <div className="shopping-bag-header-text">
                            Shopping Bag
                        </div>
                    </div>
                </div>
                <div className="shopping-bag-content">
                    <div className="shopping-bag-items-container">
                        <div className="shopping-bag-items">
                            {this.props.cartList.map((product, index) => {
                                return (
                                    <div className="cart-item" key={index}>
                                        <div className="cart-item-images">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                            />
                                            <p className="operator"><b>+</b></p>
                                            <img
                                                src='http://www.clker.com/cliparts/6/f/9/8/11971486291056358595DigitaLink_Blank_T-Shirt.svg.hi.png'
                                                alt={ product.name }
                                            />
                                        </div>
                                        <div className="cart-item-info">
                                            <p><b>{product.name}</b></p>
                                            <p>${product.price_cents / 100.00}</p>
                                        </div>
                                        <div className="remove-item-button">
                                            REMOVE
                                        </div>
                                    </div>
                                )
                            })
                          }
                        </div>
                    </div>

                    <div className="checkout-card">

                        <div className="checkout-header">
                            SUMMARY
                        </div>
                        <div className="checkout-info-container">
                            <div className="checkout-info-labels">
                                <div><b>Subtotal:</b></div>
                                <div><b>Taxes:</b></div>
                                <div><b>Shipping:</b></div>
                                <div><b>Total:</b></div>
                            </div>
                            <div className="checkout-info-values">
                                <div>${ (this.props.getSubtotal() / 100.00).toFixed(2) }</div>
                                <div>${ ((this.props.getSubtotal() / 100.00) * 0.13).toFixed(2) }</div>
                                <div>${ (this.props.cartList.length * 3.00).toFixed(2) }</div>
                                <div>${ ((this.props.getSubtotal() / 100) + ((this.props.getSubtotal() / 100) * 0.13) + (this.props.cartList.length * 3.00)).toFixed(2) }</div>
                            </div>
                        </div>


                        <div className="checkout-button">
                          <StripeCheckout
                              getSubtotal={this.props.getSubtotal}
                              cartList={this.props.cartList}
                          />
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export default ShoppingBagPage
