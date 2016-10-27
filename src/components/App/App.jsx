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
    this.state = { }
  };

 componentDidMount() {
    if (!localStorage.getItem('user')) {
      browserHistory.push('/login')
    }
  }

  render() {
    return (
      <div className="App">
        <DesignersContainer />
        <ProductsContainer />
      </div>
    );
  }

}

export default App;
