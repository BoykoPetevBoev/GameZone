import React, { useContext, useState, useEffect } from 'react';
import styles from './index.module.css'
import UserContext from '../../Context';
import { Link } from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Products from '../../components/user-cart-products';

import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Favorite from '@material-ui/icons/Favorite';


function UserPage(props) {
    const context = useContext(UserContext);
    const [user] = useState(context.user);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        if (user) {
            setCart(user.shoppingCart);
            setWishlist(user.wishlist);
        }
    }, [user])

    const showTable = (products) => {
        return products.map(product => {
            return (
                <Products item={product} />
            )
        })
    }

    return (
        <div className={styles.container}>
            <Header />
            <p className={styles.logo}>GAME ZONE</p>
            <div className={styles.user}>
                <div className={styles.welcome}>
                    <p>PROFILE</p>
                </div>
                <div className={styles.profile}>
                    <div className={styles['img-holder']}>
                        <p>{context.user.firstName[0]}</p>
                    </div>
                    <div className={styles.account}>
                        <table className={styles.table}>
                            <tbody>
                                <tr className={styles.tr}>
                                    <th>FIRST NAME:</th>
                                    <td>{context.user.firstName}</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <th>LAST NAME:</th>
                                    <td>{context.user.lastName}</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <th>ADDRESS:</th>
                                    <td>{context.user.address}</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <th>PHONE:</th>
                                    <td>{context.user.phone}</td>
                                </tr>
                                <tr className={styles.tr}>
                                    <th>EMAIL:</th>
                                    <td>{context.user.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <p className={styles.name}>Shopping Cart</p>
                <div className={styles['shopping-cart']}>
                    {showTable(cart)}
                </div>
                <Link className={styles.ico} to='/shopping-cart'>
                    <ShoppingCart />
                </Link>

                <p className={styles.name}>Wishlist</p>
                <div className={styles.wishlist}>
                    {showTable(wishlist)}
                </div>
                <Link className={styles.ico} to='/wishlist'>
                    <Favorite />
                </Link>

            </div>
            <Footer />
        </div>
    );
}

export default UserPage;