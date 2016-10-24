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
          <form className="login-user-form" id="login-user-form" action="http://localhost:8080/api/login" method="POST" role="form">
            <div className="login-container-title">Login</div>
            <div className="login-form">
              <label>Email</label>
              <input type="email" name="email" />
              <label>Password</label>
              <input type="password" name="password" />
            </div>
            <button onClick="" className="login-form-button">LOGIN
            </button>
          </form>

        </div>
        <form className='create-user-form' id="create-user-form"
        action="http://localhost:8080/auth/register" method="POST" role="form">
          <div className="login-container register">
            <div className="login-container-title">Create an account</div>
            <div className="register-form">
              <label>First name</label>
              <input type="text" name="firstname" />
              <label>Last name</label>
              <input type="text" name="lastname" />
              <label>Username</label>
              <input type="text" name="username" />
              <label>Email</label>
              <input type="email" name="email" />
              <label>Password</label>
              <input type="password" name="password" />
              <label>Confirm password</label>
              <input type="password" name="password" />
            </div>
            <button onClick="" className="login-form-button">CREATE</button>
          </div>
        </form>
      </div>
    )
  }
}
export default LoginPage
