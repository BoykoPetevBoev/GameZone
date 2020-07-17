import React from 'react';
import styles from './index.module.css';

function Admin() {
    return (
        <aside className={styles.menu}>
            <ul className={styles.menu}>
                <li>
                    <a className={styles.btn} href='/home'>Home</a>
                </li>
                <li>
                    <a className={styles.btn} href='/admin/add-product'>Product Form</a>
                </li>
                <li>
                    <a className={styles.btn} href="#">Link 2</a>
                </li>
                <li>
                    <a className={styles.btn} href="#">Link 3</a>
                </li>
                <li>
                    <a className={styles.btn} href="#">Link 4</a>
                </li>
            </ul>
        </aside>
    )
}

export default Admin;