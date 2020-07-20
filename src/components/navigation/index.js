import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <div className={styles['menu-list']}>
            <ul>
                <li>
                    <Link to="/mouse">MOUSE</Link>
                </li>
                <li>
                    <Link to="/keyboard">KEYBOARDS</Link>
                </li>
                <li>
                    <Link to="/headset">HEADSETS</Link>
                </li>
                <li>
                    <Link to="/mousepad">MOUSEPADS</Link>
                </li>
                <li>
                    <Link to="/accessoaries">ACCESSORIES</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation