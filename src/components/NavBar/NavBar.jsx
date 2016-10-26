import React, {Component} from 'react';
import './NavBar.css';
import { Link } from 'react-router';
// import FlatButton from 'material-ui/FlatButton';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

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
                Shirtvivor
              </div>
            </Link>
          </div>
          <Link to="/login" className="login-link">
            <div className="login-button">
              LOGIN
            </div>
          </Link>
          <div className="logout-button">
            LOGOUT
          </div>
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
