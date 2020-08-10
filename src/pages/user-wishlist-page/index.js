import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../Context';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import ProductsTemplate from '../../components/products-template';
import { updateWishlist, updateShoppingCart } from '../../utils/requester';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import Footer from '../../components/footer';



function Wishlist(props) {
    const [wishlist, setWishlist] = useState([]);
    const context = useContext(UserContext);

    useEffect(() => {
        setWishlist(context.user.wishlist);
    }, []);

    const removeItem = (e) => {
        const id = e.target.value;
        const index = wishlist.findIndex(el => el._id === id);
        const arr = wishlist.slice(0);
        arr.splice(index, 1);

        setWishlist(arr);
        context.user.wishlist = arr;
        updateWishlist(context.user);
    }

    const addToCart = (e) => {
        const id = e.target.value;
        const product = wishlist.find(element => element._id === id);

        context.user.shoppingCart.push(product);
        updateShoppingCart(context.user);
        props.history.push('/wishlist')
    }

    const renderProducts = (product) => {
        const path = `/${product.category}/${product._id}`
        return (
            <div key={product._id} className={styles.product}>
                <Link to={path}>
                    <ProductsTemplate  {...product} />
                </Link>
                <div>
                    <button value={product._id} className={styles.add} onClick={addToCart} >
                        <ShoppingCart className={styles.ico} />
                    </button>
                    <button value={product._id} className={styles.remove} onClick={removeItem} >
                        <DeleteIcon className={styles.ico} />
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <Header />


            <div className={styles['wishlist-wrapper']}>

                <div className={styles.wishlist}>
                    <p>YOUR WISHLIST ({context.user.wishlist.length})</p>
                </div>

                <div>
                    {wishlist.map(product => renderProducts(product))}
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Wishlist;