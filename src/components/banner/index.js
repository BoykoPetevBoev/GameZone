import React, { Component } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom'

class Banner extends Component {
    render() {
        return (
            <div className={styles.container}>

                <div className={styles.link}>
                    <p className={ styles.title}>ROCCAT VULCAN</p>
                    <p>The Roccat Vulcan 120 AIMO is one of the best gaming keyboard we’ve ever used. </p>
                    <p>It’s a joy to game and type on, and it has a stunning design that proves that proves that</p>
                    <p>gaming peripherals can be stylish as well. ...</p>
                    <Link to="/" className={styles.btn}>LEARN MORE</Link>
                </div>

                <div className={styles.element}>
                    <img className={styles['banner-img']} src="https://static-geektopia.com/storage/geek/products/roccat/vulcan/gallery-vulcan-120-04-v1-wdzp0-1-80-000-830x490.jpg" alt='' />
                </div>

            </div>
        );
    }
}
//  src="https://hexus.net/media/uploaded/2018/6/ef01e639-59ae-4ee3-84e5-f78ad08de633.jpg" 

export default Banner;