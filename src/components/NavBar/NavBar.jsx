import React, {Component} from 'react';
import './NavBar.css';
import { Link, browserHistory } from 'react-router';
// import FlatButton from 'material-ui/FlatButton';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  componentDidMount() {
    if (!localStorage.getItem('user')) {
      browserHistory.push('/login')
    }
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




  render() {
    return (
      <div>
        <div className="nav-bar-container">
          <Link to="/designers" className="designers-link">
            <div className="designers-button">
              DESIGNERS
            </div>
          </Link>
          <div className="nav-title">
            <Link to="/" className="home-link">
              <div className="title-text">
                Shirtify
              </div>
            </Link>
          </div>
          { this.checkForUser() }
          <Link to="/shopping-bag" className="shopping-bag-link">
            <div className="shopping-bag-button">
              SHOPPING BAG (0)
            </div>
          </Link>
        </div>
        { this.props.children }
      </div>
    )
  }
}
export default NavBar
