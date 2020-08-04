import React from 'react';
import styles from './index.module.css';
import Table from '../product-characteristics-table';

const ProductInfo = ({ brand, model, details, price, description, characteristics }) => {
    return (
        <div className={styles['info-holder']}>
            <p className={styles['product-name']}>{brand} {model}</p>
            <p>{details}</p>
            <p>{description}</p>
            <Table characteristics={characteristics} />
            <p className={styles['product-price']}>${price}</p>
        </div>
    );
};

export default ProductInfo;