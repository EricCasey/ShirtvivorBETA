import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../components/App/App.jsx'
import NavBar from '../components/NavBar/NavBar.jsx'
import DesignersPage from '../components/DesignersPage/DesignersPage.jsx'
import LoginPage from '../components/LoginPage/LoginPage.jsx'
import ShoppingBagPage from '../components/ShoppingBagPage/ShoppingBagPage.jsx'

const routes = (
  <Router history={ browserHistory }>
    <Route path='/' component={ NavBar } >
      <IndexRoute component={ App } />
      <Route path='/designers' component={ DesignersPage } />
      <Route path='/login' component={ LoginPage } />
      <Route path='/shopping-bag' component={ ShoppingBagPage } />


    </Route>
  </Router>
)

export default routes;



