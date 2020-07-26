import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

function HeaderButtons({ name, path }) {
    return (
        <div className={styles.skew}>
            <Link className={styles.button} to={path}>
        
                    {name}
     
            </Link>
        </div>
    );
}
export default HeaderButtons
