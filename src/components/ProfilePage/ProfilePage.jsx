import React, {Component} from 'react';
// import { browserHistory } from 'react-router';
import './profile-page.css';

class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    };

    render() {
        return (
          <div className="profile-page-container">
            <div>
              Welcome to your profile
            </div>
          </div>

        )
    }
}
export default LoginPage
