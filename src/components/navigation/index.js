import React from 'react';
import styles from './index.module.css';

function Navigation() {

    return (
        <div className={styles['menu-list']}>
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
    );
}

export default Navigation