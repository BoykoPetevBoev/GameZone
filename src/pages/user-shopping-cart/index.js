import React, { useContext, useState, useEffect } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import UserContext from '../../Context';
import CartProducts from '../../components/user-cart-products';
import CartCheckout from '../../components/user-cart-checkout';


function ShoppingCart(props) {
    const [cart, setCart] = useState([]);
    const context = useContext(UserContext);

    useEffect(() => {
        setCart(context.user.shoppingCart)
    }, [])

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
        return (
            cart.map((item, index) => {
                return (
                    <CartProducts
                        item={item}
                        index={index}
                        onClick={removeItem}
                    />
                )
            })
        )
    }

    return (
        <div className={styles.container}>
            <Header />
            <p className={styles.logo}>GAME ZONE</p>

            <div className={styles.wraper}>

                <div className={styles['your-cart']}>
                    <p>YOUR CART ({cart.length})</p>
                </div>

                <div className={styles.cart}>
                    {showItems()}
                </div>

                <CartCheckout cart={cart} />

            </div>

            <Footer />
        </div>
    );
}

export default ShoppingCart;