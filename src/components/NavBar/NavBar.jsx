import React, {Component} from 'react';
import './NavBar.css';
import { Link, browserHistory } from 'react-router';
// import FlatButton from 'material-ui/FlatButton';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
      currUser: null,
      token: JSON.parse(localStorage.getItem('user')),
      sizes: [
              'XS : 10x12',
              'S : 12x16',
              'M : 12x16',
              'L : 12x16',
              'XL : 12x16',
              '2XL : 12x16',
              '3XL : 12x16'
            ]
    }
  };

  componentDidMount() {
    if (!localStorage.getItem('user')) {
      browserHistory.push('/login')
    }
    fetch(`http://localhost:8080/api/getcurrentuser`, {
      method: 'GET',
      headers: {
        'token': this.state.token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  handleLogout = () => {
    let token = JSON.parse(localStorage.getItem('user'));
    fetch(`http://localhost:8080/api/logout`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        token
      )
    }).then(response => {
      if (response.status === 200)  {
        localStorage.removeItem('user');
        this.clearState();
        browserHistory.push(`/login`);
      }
    })
  }

  checkForUser = () => {
    if (!localStorage.getItem('user')) {
      return (
        <Link to="/login" className="login-link">
          <div className="login-button">
            LOGIN
          </div>
        </Link>
      )
    } else {
      return (
        <div className="logout-button" onClick={ this.handleLogout }>
          LOGOUT
        </div>
      )
    }
  }


  loadProfile = () => {
    if (localStorage.getItem('user')) {
      return (
        <Link to="/profile">
          <div className="profile-button">
            { this.state.currUser && this.state.currUser.username }
          </div>
        </Link>
        )
    }
  }

  updateCart = (item) => {
    let cartCopy = this.state.cartList.slice(0);
    cartCopy.push(item)
    this.setState({
      ...this.state,
      cartList: cartCopy
    })
  }

  setUser = (userinfo) => {
    this.setState({
      ...this.state,
      currUser: userinfo
    })
  }

  getSubtotal = (cart) => {
      let total = 0;
      this.state.cartList.forEach((product) => {
          total += product.price_cents;
      })
      return total;
  }

  clearState = () => {
    this.setState({
      ...this.state,
      cartList: []
    })
  }

  removeItem = (elm) => {
    let heavyCart = this.state.cartList
    let indexOfItem = elm.target.id
    heavyCart.splice(indexOfItem, 1)
    this.setState({
      ...this.state,
      cartList: heavyCart
    })
  }

  render() {
    return (
      <div>
        <div className="nav-bar-container">
          <Link to="/designers" className="designers-link">
            <div className="designers-button">
              DESIGNERS
            </div>
          </Link>
          { this.loadProfile() }
          <div className="nav-title">
            <Link to="/" className="home-link">
              <div className="title-text">
                Shirtvivor
              </div>
            </Link>
          </div>
          { this.checkForUser() }
          <Link to="/shopping-bag" className="shopping-bag-link">
            <div className="shopping-bag-button">
              SHOPPING BAG ({this.state.cartList.length})
            </div>
          </Link>
        </div>
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, {
            sizes: this.state.sizes,
            cartList: this.state.cartList,
            updateCart: this.updateCart,
            clearState: this.clearState,
            getSubtotal: this.getSubtotal,
            token: this.state.token,
            removeItem: this.removeItem,
            setUser: this.setUser,
            currUser: this.state.currUser
          })
        })}
      </div>
    )
  }
}
export default NavBar
