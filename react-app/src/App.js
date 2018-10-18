import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute'
import RouterContainer from './containers/RouterContainer';

import Detail from './pages/DetailPage';
import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Registration from './pages/RegistrationPage';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/ProfilePage';
import Header from './components/Header';

import './index.css';

class App extends Component {

  render() {
    return (
      <RouterContainer>
          <Route exact path='/' component={Header} />
          <Route path='/details' component={Header} />
          <Route path='/profile' component={Header} />
          <Route path='/home' component={Header} />

          <Switch>
            <PrivateRoute path='/home' component={Home} />
            <Route path='/login' component={LoginPage} />
            <Route path='/registration' component={Registration} />
            <PrivateRoute path='/profile' component={Profile} />
            <PrivateRoute path='/details' component={Detail} />
            <PrivateRoute path='*' component={PageNotFound} />
          </Switch>
        </RouterContainer>
      
    );
  }
}

export default App;