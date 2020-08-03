import React from 'react';
import styles from './index.module.css';

const ProductInfo = ({ brand, model, details, price, description }) => {
    return (
        <div className={styles['info-holder']}>
            <p className={styles['product-name']}>{brand} {model}</p>
            <p>{details}</p>
            <p>{description}</p>
            <p className={styles['product-price']}>${price}</p>
        </div>
    );
};

export default ProductInfo;