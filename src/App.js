import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallter from './pages/Wallet';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="c" component={ Wallter } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
