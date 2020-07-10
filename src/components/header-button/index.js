import React from 'react';
import styles from './index.module.css';

function HeaderButtons({ name, path }) {
    return (
        <div className={styles.skew}>
            <a className={styles.button} href={path}>
                {name}
            </a>
        </div>
    );
}
export default HeaderButtons
