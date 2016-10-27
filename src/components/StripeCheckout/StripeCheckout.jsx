import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import configs from '../../configs.json';


export default class TakeMoney extends React.Component {

  onToken(token){
    fetch('http://localhost:8080/api/order', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(token => {
      // console.log(token + "blah")
      //put computer code here
    });
  }

  sendOrder(){
    fetch('http://localhost:8080/api/order', {
      method: 'POST',
      body: JSON.stringify({
        cartList: this.props.cartList,
        total_price_cents: this.props.getSubtotal(),
        stripe_order_token: 'blah'
      }
      ),
    }).then(cart => {
      console.log(cart + "this is my cart after")
    });
  }

  render() {
    return (
      <StripeCheckout
        name="SHIRTVIVOR"
        description="Delivery in X days"
        image="https://static-s.aa-cdn.net/img/ios/371279677/1fbf8e2fbaf52b6caa1d1de481f8eeb9?v=1"
        ComponentClass="div"
        panelLabel="total: "
        amount={this.props.getSubtotal()}
        currency="USD"
        stripeKey={configs.stripe_api_key}
        locale="en"
        email="info@shirtify.co"
        // Note: Enabling either address option will give the user the ability to
        // fill out both. Addresses are sent as a second parameter in the token callback.
        // shippingAddress
        // billingAddress={false}
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
        zipCode={false}
        // allowRememberMe
        token={this.onToken}
        onClick={this.sendOrder()}
        // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
        // you are using multiple stripe keys
        reconfigureOnUpdate={false}
        // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
        // useful if you're using React-Tap-Event-Plugin
        triggerEvent="onTouchTap"
        >
        <div>
          CHECKOUT
        </div>
      </StripeCheckout>
    )
  }
}
