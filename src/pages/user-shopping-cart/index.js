import React, { useContext, useState, useEffect } from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import UserContext from '../../Context';
import CartProducts from '../../components/user-cart-products';
import CartCheckout from '../../components/user-cart-checkout';
import { updateShoppingCart } from '../../utils/requester';

function ShoppingCart() {
    const [cart, setCart] = useState([]);
    const context = useContext(UserContext);

    useEffect(() => {
        setCart(context.user.shoppingCart)
    }, []);

    const removeItem = async (e) => {
        const id = e.target.value;
        const index = cart.findIndex(el => el._id === id);
        const arr = cart.slice(0);
        arr.splice(index, 1);

        setCart(arr);
        context.user.shoppingCart = arr;
        updateShoppingCart(context.user);
    }

    const showItems = () => {
        return (
            cart.map((item, index) => {
                return (
                    <div key={index}>
                        <CartProducts
                            item={item}
                            onClick={removeItem}
                        />
                    </div>
                )
            })
        )
    }

    return (
        <div className={styles.container}>
            <Header />
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