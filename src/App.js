import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Admin from './pages/Admin';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/user" component={User} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
