    import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import './shopping_bag_page.css';
import '../../../public/font-awesome/css/font-awesome.css';
import StripeCheckout from '../StripeCheckout/StripeCheckout.jsx';

class ShoppingBagPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          defaultSize: 'M : 12x16'
        }
    };

    // sizes = [
    //                    {'XS': "10x12"},
    //                   {'S': "12x16"},
    //                     {'M': "12x16"},
    //                     {'L': "12x16"},
    //           {'XL': "12x16"},
    //                     {'2XL': "12x16"},
    //       {'3XL': "12x16"}
    //     ];

    componentDidMount() {
        if (!localStorage.getItem('user')) {
            browserHistory.push('/login')
        }
    }

    sendOrder = () => {
        fetch('http://localhost:8080/api/order', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
             'Content-Type': 'application/json'
        },
            body: JSON.stringify({
            token: JSON.parse(localStorage.getItem('user')).token,
            cartList: this.props.cartList,
            total_price_cents: (((this.props.getSubtotal()/100)+((this.props.getSubtotal()/100)*0.13)+(this.props.cartList.length*3.00)).toFixed(2))*100,
            stripe_order_token: 'blah'
        })
        }).then(response => {
            if (response.status === 200)  {
            this.props.clearState()
        }
        return response.json()
      });

    }

    setSize = (item) => {
      item.preventDefault();
      let sizeIndex = item.target.id;
      let size = item.target.className.match(/[^:]*/i)[0];
      let sizeElmID = 'size' + sizeIndex
      document.getElementById(sizeElmID).innerHTML = size;
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
                                let sizeID = 'size' + index;
                                let lineItemID = index;
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
                                            {/* <p>{this.props.cartList.size}</p> */}
                                        </div>
                                        <div className="sizes-container">
                                            <div className="dropdown">
                                              <button className="dropbtn" id={sizeID}>Sizes</button>
                                              <div className="dropdown-content">
                                                {this.props.sizes.map((size, sizeIndex) => {
                                                  return (
                                                    <a href="#"
                                                    className={size}
                                                    key={sizeIndex}
                                                    id={lineItemID}
                                                    onClick={this.setSize}>{size}</a>
                                                  )
                                                })}
                                              </div>
                                            </div>
                                        </div>
                                        <div className="cart-item-info">
                                            <p><b>{product.name}</b></p>
                                            <p>${ (product.price_cents / 100).toFixed(2) }</p>
                                        </div>
                                        <div className="remove-item-button"
                                        id={index}
                                        onClick={this.props.removeItem}>
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
                        { this.props.cartList.length > 0 &&
                           <StripeCheckout
                              className="checkout-button"
                              sendOrder={this.sendOrder}
                              getSubtotal={this.props.getSubtotal}
                              cartList={this.props.cartList}
                            />
                        }

                    </div>
                </div>

            </div>

        )
    }
}
export default ShoppingBagPage
