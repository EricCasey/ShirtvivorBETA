import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import configs from '../../configs.json';


export default class TakeMoney extends React.Component {

  onToken(token){
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(token => {
      //put computer code here
    });
  }

  render() {
    return (
      <StripeCheckout
        name="Shirtvivor"
        description="You're buying a shirt"
        image="https://s-media-cache-ak0.pinimg.com/564x/1a/65/50/1a6550c1854176fda108bda4ee9ce396.jpg"
        ComponentClass="div"
        panelLabel="Give Money"
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
