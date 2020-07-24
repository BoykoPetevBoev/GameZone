import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

function Navigation() {
    

    return (
        <div className={styles['menu-list']}>
            <ul>
                <li className={styles['special-effects']} >
                    <Link  to="/">MOUSE</Link>
                </li>
                <li className={styles['special-effects']}>
                    <Link to="/">KEYBOARDS</Link>
                </li>
                <li className={styles['special-effects']}>
                    <Link to="/">HEADSETS</Link>
                </li>
                <li className={styles['special-effects']}>
                    <Link to="/">MOUSEPADS</Link>
                </li>
                <li className={styles['special-effects']}>
                    <Link to="/">ACCESSORIES</Link>
                </li>
            </ul>
        </div>
    );
}


export default Navigation