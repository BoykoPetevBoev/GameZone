import React, { useState } from 'react';
import styles from './index.module.css';

function ImageHolder(props) {

    return (
        <div className={styles.container}>
            {
                props.images.map((image, index) => {
                    return (
                        <div key={index} className={styles['image-holder']}>
                            <img src={image} alt='' />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ImageHolder;