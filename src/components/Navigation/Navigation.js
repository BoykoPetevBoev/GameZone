import React, { Component } from 'react';
import './Navigation.css'

class Navigation extends Component {
    render() {
        return (
            <div className="menuDiv">
                <div className="menuList">
                    <ul>
                        <li>
                            <a href="/mouse">MOUSE</a>
                        </li>
                        <li>
                            <a href="/keyboard">KEYBOARDS</a>
                        </li>
                        <li>
                            <a href="/headset">HEADSETS</a>
                        </li>
                        <li>
                            <a href="/mousepad">MOUSEPADS</a>
                        </li>
                        <li>
                            <a href="/accessoaries">ACCESSORIES</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navigation;