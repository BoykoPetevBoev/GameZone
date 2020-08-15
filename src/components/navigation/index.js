import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import NavigationButton from '../navigation-button';

function Navigation() {

    return (
        <div className={styles['menu-list']}>
            <ul>
                <NavigationButton value='MOUSE' path='/mouse' />
                <NavigationButton value='KEYBOARDS' path='/keyboard' />
                <NavigationButton value='HEADSETS' path='/headset' />
                <NavigationButton value='MOUSEPADS' path='/mousepad' />
                <NavigationButton value='ACCESSORIES' path='/accessories' />
            </ul>
        </div>
    );
}

export default Navigation