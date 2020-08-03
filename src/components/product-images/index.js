import React, { useState } from 'react';
import styles from './index.module.css';

function ImageHolder(props) {

    return (
        <div className={styles.container}>
            {
                props.images.map(image => {
                    return (
                        <div className={styles['image-holder']}>
                            <img src={image} alt='' />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ImageHolder;