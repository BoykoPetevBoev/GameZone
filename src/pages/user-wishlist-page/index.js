import React, { useContext } from 'react';
import styles from './index.module.css';
import UserContext from '../../Context';
import Header from '../../components/header';
import ShoppingInfo from '../../components/shopping-info';


function Wishlist(props) {
    const context = useContext(UserContext);

    console.log(context.user.wishlist);

    return (
        <div className={styles.container}>
            <Header />
            <ShoppingInfo />
            
        </div>
    );
}

export default Wishlist;