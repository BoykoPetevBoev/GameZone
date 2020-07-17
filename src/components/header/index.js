import React from 'react';
import HeaderButtons from '../header-button';

import styles from './index.module.css';

function Header() {

    return (
        <nav className={styles.header}>

            <div className={styles.container}>
                <HeaderButtons name='Home' path='/home' />
                <HeaderButtons name='Admin' path='/Admin' />
            </div>

            <div className={styles.container}>
                <div className={styles['header-logo']}>
                    <h2>GAME ZONE</h2>
                </div>
            </div>

            <div className={styles.container}>
                <HeaderButtons name='Logout' path='/Logout' />
                <HeaderButtons name='Login' path='/Login' />
                <HeaderButtons name='Register' path='/Register' />
            </div>

        </nav>
    )

}
export default Header

