import React, { Component } from 'react';
import '../public/styles/App.css';
import NavBar from './NavBar.jsx'
// import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import VideoBG from './VideoBG.jsx';
import ProductsContainer from './ProductsContainer.jsx';
import DesignersContainer from './DesignersContainer.jsx';
// import NavBar from './MyAwesomeReactComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // DATA HERE
      products : [
        {
          name : 'tshirt 1',
          description : 'blah blah lorem ipsum',
          price : '$66',
          image : 'https://www.blacksocks.com/files/styles/blk_product_large/public/T-Shirt-Suzette-weiss_0.png?itok=d1sWT_ZC'
        },
        {
          name : 'tshirt 2',
          description : 'blah blah lorem ipsum dolor sit amet',
          price : '$33',
          image : 'https://www.blacksocks.com/files/styles/blk_product_large/public/T-Shirt-Suzette-weiss_0.png?itok=d1sWT_ZC'
        },
        {
          name: 'tshirt 3',
          description: 'wear this everyday, don\'t ever take it off',
          price: '$999',
          image : 'https://www.blacksocks.com/files/styles/blk_product_large/public/T-Shirt-Suzette-weiss_0.png?itok=d1sWT_ZC'
        },
        {
          name: 'tshirt 4',
          description: 'wear this everyday, don\'t ever take it off',
          price: '$999',
          image : 'https://www.blacksocks.com/files/styles/blk_product_large/public/T-Shirt-Suzette-weiss_0.png?itok=d1sWT_ZC'
        },
        {
          name: 'tshirt 5',
          description: 'wear this everyday, don\'t ever take it off',
          price: '$999',
          image : 'https://www.blacksocks.com/files/styles/blk_product_large/public/T-Shirt-Suzette-weiss_0.png?itok=d1sWT_ZC'
        },
         {
          name: 'tshirt 6',
          description: 'wear this everyday, don\'t ever take it off',
          price: '$999',
          image : 'https://www.blacksocks.com/files/styles/blk_product_large/public/T-Shirt-Suzette-weiss_0.png?itok=d1sWT_ZC'
        }
      ],
      designers : [
        {name : 'Adam', location : 'Toronto', profileImg : 'http://gevrilgroup.com/images/gianni-versace-medusa-logo/Versace.jpg'},
        {name : 'Eric', location : 'Torontoh', profileImg : 'http://cdn.smosh.com/sites/default/files/2015/03/pokemon-pepe.jpg'},
        {name : 'Hugh', location : 'MTL', profileImg : 'http://static1.comicvine.com/uploads/scale_small/11/113509/4693444-6164752601-ben_a.jpg'}
      ]
    }
  };


  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
        <NavBar/>
      </MuiThemeProvider>
      {/* <VideoBG/> */}
      <DesignersContainer
        designers={ this.state.designers }
      />
      <ProductsContainer
        products={ this.state.products }
      />

      </div>
    );
  }

}

export default App;
