import React, {Component} from 'react';
import './designers_side_bar.css'

class DesignersSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };

  render() {
    return (
      <div className="designer-side-bar-container">
        <div className='designer-side-bar-list'>
          {this.props.designers.map((designer, index) => {
            return (
              <div key={index} className="designer-side-bar-item">
                <div>{designer.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default DesignersSideBar