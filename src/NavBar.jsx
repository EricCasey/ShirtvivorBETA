import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';

  class NavBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedin : false,
      }
    };

    render() {
      return (
        <div className="nav-bar-container">
          <div className="nav-title">
            SCREAMING_SNAKE_CASE
          </div>
          <div id="control-button">
            <FlatButton
              label="Login"
              style={{minWidth: "20%"}}
            />
          </div>

        </div>
      )
    }
  }
  export default NavBar
