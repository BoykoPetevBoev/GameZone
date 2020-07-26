import React from 'react';
import HeaderButtons from '../header-button';

import styles from './index.module.css';

function Header() {
    return (
        <nav className={styles.header}>

            <div className={styles.container}>
                <HeaderButtons name='Home' path='/' />
                <HeaderButtons name='Admin' path='/admin' />
            </div>

            <div className={styles.container}>
                <div className={styles['header-logo']}>
                    <p>GAME ZONE</p>
                </div>
            </div>

            <div className={styles.container}>
                <HeaderButtons name='Logout' path='/logout' />
                <HeaderButtons name='Login' path='/login' />
                <HeaderButtons name='Register' path='/register' />
            </div>

        </nav>
    )
}
export default Header

