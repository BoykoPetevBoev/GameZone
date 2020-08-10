import React from 'react';
import styles from './index.module.css';

function CartProducts({ item, onClick }) {
    return (
        <div className={styles.product}>

            <div className={styles['image-holder']}>
                <img className={styles.img} src={item.images[0]} />
            </div>

            <div className={styles['name-holder']}>
                <p>{item.brand} {item.model}</p>
            </div>

            <div className={styles['price-holder']}>
                <p className={styles.price}>${item.price}</p>
            </div>

            <div className={styles['button-holder']}>
                <button className={styles.button} value={item._id} onClick={onClick} >✕</button>
            </div>
            
        </div>
    );
}

export default CartProducts;