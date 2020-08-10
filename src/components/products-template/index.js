import React from 'react';
import styles from './index.module.css'
//{ category, images, brand, model, price }
function ProductsTemplate({ category, images, brand, model, price }) {
    // console.log(images);
    return (
        <div className={styles.wrapper}>

            <div className={styles.category}>
                <p>{category}</p>
            </div>

            <div className={styles.image}>
                <img src={images[0]} alt="NoImage" />
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