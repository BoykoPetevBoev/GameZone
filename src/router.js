import React from 'react';
import { BrowserRouter as Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from './pages/home-page';
import RegisterPage from './pages/register-page';
import LoginPage from './pages/login-page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
