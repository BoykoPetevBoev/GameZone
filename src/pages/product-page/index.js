import React, { useState, useEffect, useContext } from 'react';
import styles from './index.module.css';

import Header from '../../components/header';
import Menu from '../../components/navigation';
import ProductImages from '../../components/product-images';
import ProductInfo from '../../components/product-info';
import UserContext from '../../Context';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Favorite from '@material-ui/icons/Favorite';
import ProductButton from '../../components/product-button';
import { updateShoppingCart, updateWishlist, getProduct } from '../../utils/requester';

function Product(props) {
    const [product, setProduct] = useState({});
    const [user, setUser] = useState({});
    const context = useContext(UserContext)

    useEffect(() => {
        getData();
        setUser(context.user);
    }, []);

    const getData = async () => {
        const data = await getProduct(props.match.params.id);
        setProduct(data);
    }

    const addToCart = () => {
        if (!context.loggedIn) {
            return props.history.push('/login');
        }
        context.user.shoppingCart.push(product);
        updateShoppingCart(context.user);
        props.history.push('/');
    }

    const addToWishlist = () => {
        if (!context.loggedIn) {
            return props.history.push('/login');
        }

        context.user.wishlist.push(product);
        updateWishlist(context.user)
        props.history.push('/');
    }
    return (
        <div className={styles.container}>
            <Header />
            <Menu />
            <div className={styles['product-wraper']}>
                <ProductImages images={product.images} />
                <ProductInfo
                    brand={product.brand}
                    model={product.model}
                    description={product.description}
                    price={product.price}
                    characteristics={product.characteristics}
                />
                <div className={styles['button-wrapper']}>

                    <ProductButton
                        onClick={addToCart}
                        name='ADD TO CART'
                    > <ShoppingCart /> </ProductButton>

                    <ProductButton
                        onClick={addToWishlist}
                    > <Favorite /> </ProductButton>

                </div>
            </div>
        </div>
    );
}
export default Product;



// class ProductPage extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             product: {},
//             id: this.props.match.params.id
//         }
//     }
//     componentDidMount = async () => {
//         const { id } = this.state;
//         const promise = await fetch('http://localhost:5000/get-products');
//         const data = await promise.json();
//         const [product] = data.filter(obj => obj._id === id);
//         this.setState({
//             product
//         });
//     }
//     render() {
//         const { product } = this.state;
//         return (
//             <div>
//                 <Header />
//                 <Menu />
//                 <div className={styles.container}>
//                     {/* <ImageHolder images={[product., product.secondImage]} /> */}
//                     <div className={styles['pic-holder']}>
//                         <div className={styles['image-holder']}>
//                             <img src={product.} alt='' />
//                         </div>
//                         <div className={styles['image-holder']}>
//                             <img src={product.secondImage} alt='' />
//                         </div>
//                     </div>
//                     <div className={styles['info-holder']}>
//                         <p className={styles['product-name']}>{product.brand} {product.model}</p>
//                         <p>{product.details}</p>
//                         <p className={styles['product-price']}>${product.price}</p>
//                         <Link className={styles['add-to-cart']} to="/">ADD TO CART</Link>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }


