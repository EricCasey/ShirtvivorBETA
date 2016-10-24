import React, {Component} from 'react';
import './designers_side_bar.css'

class DesignersSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designers: [] }
  };

  componentDidMount() {
    var invocation = new XMLHttpRequest();
    if (invocation) {
      fetch(`http://localhost:8080/api/designers`)
          .then( result => {
            var blah = result.json()
            blah.then( designers => {
              this.setState({ designers: designers });
              this.forceUpdate()
            });
          })
  };
}


  render() {
    return (
      <div className="designer-side-bar-container">
        <div className='designer-side-bar-list'>
        <div className="designer-side-bar-item">
          <div><b>ALL DESIGNERS</b></div>
        </div>
          {this.state.designers.map((designer, index) => {
            return (
              <div key={index} className="designer-side-bar-item">
                <div onClick="console.log('blah')" >{designer.username}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default DesignersSideBar
