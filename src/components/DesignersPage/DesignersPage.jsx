import React, {Component} from 'react';
import DesignersSideBar from '../DesignersSideBar/DesignersSideBar.jsx';
import './designers_page.css'

class DesignersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designers : [
        {
          name: 'Acne Studios'
        },
        {
          name: 'APC'
        },
        {
          name: 'Balenciaga'
        },
        {
          name: 'Chanel'
        },
        {
          name: 'Common Projects'
        },
        {
          name: 'Dior'
        },
        {
          name: 'Fendi'
        },
        {
          name: 'Givenchy'
        },
        {
          name: 'Gucci'
        },
        {
          name: 'Helmut Lang'
        },
        {
          name: 'Juun J'
        },
        {
          name: 'Maison Margiela'
        },
        {
          name: 'Marc Jacobs'
        },
        {
          name: 'Paul Smith'
        },
        {
          name: 'Saint Laurent'
        },
        {
          name: 'Versace'
        },
        {
          name: 'Yohji Yamamoto'
        }
      ]
    }
  };

  render() {
    return (
      <div>
        <DesignersSideBar
         designers={ this.state.designers }
        />
      </div>
    )
  }
}
export default DesignersPage