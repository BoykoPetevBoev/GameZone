import React, { useContext, useState, useEffect } from 'react';
import styles from './index.module.css';
import UserContext from '../../Context';

import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Favorite from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';

function ShoppingInfo(props) {
    const context = useContext(UserContext);
    const [cart, setCart] = useState(0);
    const [totalPrice, setTotalParice] = useState('0.00')

    useEffect(() => {
        if (context.user) {
            setCart(context.user.shoppingCart.length);
            const price = context.user.shoppingCart.reduce((acc, cur) => {
                return acc += Number(cur.price);
            }, 0);
            setTotalParice(price.toFixed(2));
        }

    }, []);

    return (
        <div className={styles.container} >
            <div className={styles.skew}>
                <p>$ {totalPrice}</p>
            </div>
            <div className={styles.links}>

                <Link className={styles.ico} to='/shopping-cart'>
                    <Badge color="secondary" badgeContent={cart}>
                        <ShoppingCart />
                    </Badge>
                </Link>

                <Link className={styles.ico} to='/wishlist'><Favorite /></Link>
            </div>

        </div>
    );
}

export default ShoppingInfo;