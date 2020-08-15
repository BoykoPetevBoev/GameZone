import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';


function NavigationButton({ value, path }) {
    return (
        <li className={styles['special-effects']} >
            <Link className={styles.link} to={path}>
                {value}
            </Link>
        </li>
    );
}

export default NavigationButton;