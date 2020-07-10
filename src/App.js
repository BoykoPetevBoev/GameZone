import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Header from './components/header'
import Login from './components/User/login';
import Register from './components/User/register';
import Navigation from './components/navigation';

function App() {
  return (
    <Router>
      <Header />
      {/* <Navigation /> */}
      <br/>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </Router>
  );
}

export default App;
