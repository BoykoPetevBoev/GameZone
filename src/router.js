import React, { useContext } from 'react';
import { BrowserRouter as Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from './pages/home-page';
import RegisterPage from './pages/user-register-page';
import LoginPage from './pages/user-login-page';
import AdminPage from './pages/admin-page';
import ProductFormPage from './pages/admin-product-form';
import UsersTable from './pages/admin-users-table';
import ProductTable from './pages/admin-products-table';
import ProductPage from './pages/product-page';
import UserContext from './Context';

function App() {
  const { loggedIn } = useContext(UserContext)
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route exact path='/login'>
          {loggedIn ? <HomePage /> : <LoginPage />}
        </Route>

        <Route exact path='/register'>
          {loggedIn ? <HomePage /> : <RegisterPage />}
        </Route>
        
        <Route exact path='/admin' component={AdminPage} />
        <Route exact path='/admin/form' component={ProductFormPage} />
        <Route exact path='/admin/users' component={UsersTable} />
        <Route exact path='/admin/products' component={ProductTable} />

        <Route exact path='/mouse'>
          <HomePage filter='mouse' />
        </Route>

        <Route exact path='/keyboard' >
          <HomePage filter='keyboard' />
        </Route>

        <Route exact path='/headset' >
          <HomePage filter='headset' />
        </Route>

        <Route exact path='/mousepad' >
          <HomePage filter='mousepad' />
        </Route>

        <Route exact path='/accessory' >
          <HomePage filter='accessory' />
        </Route>

        <Route exact path='/mouse/:id' component={ProductPage} />
        <Route exact path='/keyboard/:id' component={ProductPage} />
        <Route exact path='/headset/:id' component={ProductPage} />
        <Route exact path='/mousepad/:id' component={ProductPage} />
        <Route exact path='/accessory/:id' component={ProductPage} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
