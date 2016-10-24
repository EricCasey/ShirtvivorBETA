import React, {Component} from 'react';
import DesignersSideBar from '../DesignersSideBar/DesignersSideBar.jsx';
import DesignersProductsContainer from '../DesignersProductsContainer/DesignersProductsContainer.jsx';
import './designers_page.css'

class DesignersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_designer: 1,
      }
  };


  updateDesigner = (designerTarget) => {

    this.setState({
      ...this.state,
      current_designer: {
        ...this.state.current_designer,
        ...designerTarget
      }
    });


  }



  render() {
    return (
      <div>
        <DesignersSideBar
         designers={ this.state.designers }
        />
        <DesignersProductsContainer
        products={ this.state.products }
        current_designer={this.state.current_designer}
        updateDesigner={ this.updateDesigner } />
      </div>
    )
  }
}
export default DesignersPage
