import React, { useContext } from 'react';
import styles from './index.module.css';
import UserContext from '../../Context';
import Header from '../../components/header';
import ProductsTemplate from '../../components/products-template';


function Wishlist(props) {
    const context = useContext(UserContext);

    console.log(context.user.wishlist);


    const renderProducts = (product) => {

        return (
            <div key={product._id} className={styles.product}>

                <ProductsTemplate  {...product} />

            </div>
        )
    }

    return (
        <div className={styles.container}>
            <Header />
            {context.user.wishlist.map(product => renderProducts(product))}
        </div>
    );
}

export default Wishlist;