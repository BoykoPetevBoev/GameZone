import React, { useContext, useState, useEffect } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import UserContext from '../../Context';
import ShoppingInfo from '../../components/shopping-info';


function ShoppingCart(props) {
    const [cart, setCart] = useState([]);
    const context = useContext(UserContext);

    useEffect(() => {
        setCart(context.user.shoppingCart)
    }, [])

    const totalPrice = () => {
        return cart.reduce((acc, cur) => {
            return acc += Number(cur.price)
        }, 0)
    }

    const removeItem = (e) => {
        const id = e.target.value;
        const arr = cart.slice(0);
        const index = cart.findIndex(el => el._id === id);
        arr.splice(index, 1);

        setCart(arr);
        context.user.shoppingCart = arr;

        fetch('http://localhost:5000/update-shopping-cart', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(context.user)
        })
    }

    const showItems = () => {
        return cart.map((item, index) => {
            return (
                <div key={index} className={styles.product}>

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
                        <button className={styles.button} value={item._id} onClick={removeItem} >✕</button>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className={styles.container}>
            <Header />
            <ShoppingInfo />
            <div className={styles['your-cart']}>
                <p>YOUR CART ({cart.length})</p>
            </div>
            <div>
        
                <div className={styles.cart}>
                    {showItems()}
                </div>
                <div className={styles.order}>
                    <p className={styles.heading}>SUMMARY</p>
                    <div className={styles['order-info']}>

                        <p>Subtotal:</p>
                        <p>${totalPrice()}</p>

                        <p>Shipping:</p>
                        <p>FREE</p>
                    </div>
                    <div className={styles['total-price']}>
                        <p>TOTAL: </p>
                        <p>${totalPrice()}</p>
                    </div>

                    <button className={styles.checkout}>CHECKOUT</button>

                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ShoppingCart;