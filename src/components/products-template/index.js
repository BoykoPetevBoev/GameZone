import React from 'react';
import styles from './index.module.css'
//{ category, images, brand, model, price }
function ProductsTemplate({ category, images, brand, model, price, firstImage }) {

    return (
        <div>

            <div className={styles.category}>
                <p>{category}</p>
            </div>

            <div className={styles.image}>
                <img src={images ? images[0] : firstImage} alt="NoImage" />
            </div>

            <div className={styles.title}>
                <p> <b>{brand} {model}</b></p>
            </div>

            <div className={styles.price}>
                <p>${price}</p>
            </div>

        </div>
    );
}

export default ProductsTemplate;