import React, {Component} from 'react';
import './order-bar.css';
import { Link } from 'react-router';

class DesignersSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          orders: []
        }
    };

    componentDidMount() {
        let token = this.props.token.token
        console.log(token)
        var invocation = new XMLHttpRequest();
        if (invocation) {
            fetch(`http://localhost:8080/api/userinfo/${token}`)
            .then(result => {
              var userinfo = result.json()
              return userinfo
            }).then(user => {
              return user.user_id
            }).then(id => {
              let targetId = id;
              let invocation = new XMLHttpRequest();
              if (invocation) {
                  fetch(`http://localhost:8080/api/orders/${targetId}`)
                  .then(result => {
                      let theirOrders = result.json()
                      theirOrders.then(orders => {
                        // console.log(orders)
                        this.setState({
                          ...this.state,
                          orders: orders
                        })
                        return orders
                      });
                  })
              };
            });
        };
      }



    render() {
      let orderStyle = {
        'width': '100%',
        'margin-left': '0px'
      }
      if(!this.state.orders[0] || undefined) {
        return (
          <div className="no-orders-yet">
            <p>No orders yet.</p>
            <Link to="/designers" className="shop-button">
              <p>SHOP?</p>
            </Link>
          </div>
        )
      } else {
        // console.log(this.state.orders)
        return (
          <div>
              {this.state.orders.map((order, index) => {
                  return (
                      <div className="order-side-bar-item" style={orderStyle} key={index}>
                        <p className="order-side-bar-info"><b>OrderID:</b> { order.id } | <b>Total:</b> ${( order.total_price_cents/100) }</p>
                        {/* <p className="designer-id">Status: Delivered 00/00/00</p> */}
                      </div>
                  )
              })
            }
          </div>
        )
      }
    }
}
export default DesignersSideBar
