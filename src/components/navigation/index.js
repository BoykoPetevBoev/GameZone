import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

function Navigation() {


    return (
        <div className={styles['menu-list']}>
            <ul>
                <li className={styles['special-effects']} >
                    <Link className={styles.link} to="/">
                        <b>MOUSE</b>
                    </Link>
                </li>
                <li className={styles['special-effects']}>
                    <Link className={styles.link}  to="/">
                        <b>KEYBOARDS</b>
                    </Link>
                </li>
                <li className={styles['special-effects']}>
                    <Link className={styles.link}  to="/">
                        <b>HEADSETS</b>
                    </Link>
                </li>
                <li className={styles['special-effects']}>
                    <Link className={styles.link}  to="/">
                        <b>MOUSEPADS</b>
                    </Link>
                </li>
                <li className={styles['special-effects']}>
                    <Link className={styles.link}  to="/">
                        <b>ACCESSORIES</b>
                    </Link>
                </li>
            </ul>
        </div>
    );
}


export default Navigation