import React, {Component} from 'react';
import './login_page.css'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  };

  handleLoginClick = () => {
    console.log(this.state)
    let credentials = this.state
    fetch(`http://localhost:8080/api/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        credentials
      )
    }).then(response => {
      return response.json()
    }).then( json => {
      // do work here
      window.user_token = json.token
    })
  }


  handleOnChange = (value, name) => {
    this.setState({
      ...this.state,
      [name]: value
    })
  }

  generateInputs = (inputVal) => {
    return inputVal.map((input,index) => {
      return(
        <div className="login-form" key={index}>
          <label>{input.label}</label>
          <input
            value={this.state[input.name]}
            type={input.type}
            name={input.name}
            onChange={(e) => {this.handleOnChange(e.target.value, e.target.name)}} />
          </div>
      )
    })
  };

  render() {

    let loginValues = [
      {label: "Email", type: "email", name: "loginEmail"},
      {label: "Password", type: "password", name: "loginPassword"}
    ]
    let registerValues = [
      {label: "First Name", type: "text", name: "firstName"},
      {label: "Last Name", type: "text", name: "lastName"},
      {label: "Username", type: "text", name: "username"},
      {label: "Email", type: "email", name: "email"},
      {label: "Password", type: "password", name: "password"},
      {label: "Confirm password", type: "password", name: "confirmPassword"},
    ]

    return (
      <div className="login-page-container">
        <div className="login-container login">
            <div className="login-container-title">Login</div>
            <div className="login-form">
              { this.generateInputs(loginValues) }
            </div>
            <div className="login-form-button" onClick={ this.handleLoginClick }>LOGIN</div>

        </div>
          <div className="login-container register">
            <div className="login-container-title">Create an account</div>
            <div className="register-form">
              { this.generateInputs(registerValues) }
            </div>
            <div className="login-form-button">CREATE</div>
          </div>
      </div>
    )
  }
}
export default LoginPage
