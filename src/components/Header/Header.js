import React, { Component } from 'react';
import './Header.css'
import HeaderButtons from './HeaderButtons';
import HeaderLogo from './HeaderLogo'

export default class Header extends Component {
    render() {
        return (
            <nav className="header">

                <div>
                    <HeaderButtons name='Home' path='/home' />
                </div>

                <div>
                    <HeaderLogo />
                </div>

                <div>
                    <HeaderButtons name='Logout' path='/Logout'/>
                    <HeaderButtons name='Login' path='/Login'/>
                    <HeaderButtons name='Register' path='/Register'/>
                </div>

            </nav>
        )
    }
};
