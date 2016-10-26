import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './App.css';
// import VideoBG from './VideoBG.jsx';
import ProductsContainer from '../ProductsContainer/ProductsContainer.jsx';
import DesignersContainer from '../DesignersContainer/DesignersContainer.jsx';
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

 componentDidMount() {
    if (!localStorage.getItem('user')) {
      browserHistory.push('/login')
    }
  }

  render() {
    return (
      <div className="App">

      <DesignersContainer
        designers={ this.state.designers }
      />
      <ProductsContainer

      />

      </div>
    );
  }

}

export default App;
