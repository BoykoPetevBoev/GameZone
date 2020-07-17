import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Header from './components/header'
import Login from './components/user/login';
import Register from './components/user/register';
import Navigation from './components/navigation';
import Admin from './components/admin-page';
import ProductForm from './components/product-form';

function App() {
  return (
    <Router>
      <Header />
      <Route path='/admin/add-product' component={ProductForm} />
      <Route path='/admin' component={Admin} />
      <Route path='/home' component={Navigation} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </Router>
  );
}

export default App;
