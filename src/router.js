import React from 'react';
import { BrowserRouter as Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from './pages/home-page';
import RegisterPage from './pages/register-page';
import LoginPage from './pages/login-page';
import AdminPage from './pages/admin-page';
import ProductFormPage from './pages/product-form-page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/admin' component={AdminPage} />
        <Route path='/admin/form' component={ProductFormPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
