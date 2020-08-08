import React, { useContext, useState, useEffect } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import UserContext from '../../Context';


function ShoppingCart(props) {
    const [cart, setCart] = useState([]);
    const context = useContext(UserContext);

    useEffect(() => {
        setCart(context.user.shoppingCart)
    }, [])
    console.log(context.user.shoppingCart)

    const showItems = () => {
        return cart.map(item => {
            return (
                <div className={styles.product}>

                    <div className={styles['image-holder']}>
                        <img className={styles.img} src={item.firstImage} />
                    </div>

                    <div className={styles['name-holder']}>
                        <p>{item.brand} {item.model}</p>
                    </div>

                    <div className={styles['price-holder']}>
                        <p className={styles.price}>${item.price}</p>
                    </div>

                    <div className={styles['button-holder']}>
                        <button>✕</button>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles['your-cart']}>
                <p>YOUR CART ({cart.length})</p>
            </div>
            <div>

                <div className={styles.cart}>
                    {showItems()}
                </div>
                <div className={styles.order}>

                </div>
            </div>

        </div>
    );
}

export default ShoppingCart;