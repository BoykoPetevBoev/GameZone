import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Header from './components/header'
import Login from './components/user/login';
import Register from './components/user/register';
import Navigation from './components/navigation';

function App() {
  return (
    <Router>
      <Header />
      <Route path='/home' component={Navigation} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </Router>
  );
}

export default App;
