import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Header from './components/Header/Header';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Navigation from './components/Navigation/Navigation';

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
