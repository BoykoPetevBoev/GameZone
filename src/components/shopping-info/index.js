import React, { useContext } from 'react';
import styles from './index.module.css';
import UserContext from '../../Context';

function ShoppingInfo(props) {

    const context = useContext(UserContext);
    

    return (
        <div className={styles.container} >
            <div className={styles['price-holder']}>
                <p className={styles.price}>$100</p>
            </div>
        </div>
    );
}

export default ShoppingInfo;