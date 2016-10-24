import React, {Component} from 'react';
import './login_page.css'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin : false,
    }
  };

  render() {
    return (
      <div className="login-page-container">
        <div className="login-container login">
          <div className="login-container-title">Login</div>
          <div className="login-form">
            <label>Email address</label>
            <input type="email" name="email" />
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <div className="login-form-button">LOGIN</div>
        </div>

        <div className="login-container register">
          <div className="login-container-title">Create an account</div>
          <div className="register-form">
            <label>First name</label>
            <input type="text" name="firstname" />
            <label>Last name</label>
            <input type="text" name="lastname" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Password</label>
            <input type="password" name="password" />
            <label>Confirm password</label>
            <input type="password" name="password" />
          </div>
          <div className="login-form-button">CREATE</div>
        </div>
      </div>
    )
  }
}
export default LoginPage