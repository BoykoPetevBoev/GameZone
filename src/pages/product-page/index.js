import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

import Header from '../../components/header';
import Menu from '../../components/navigation';
import ProductImages from '../../components/product-images';
import ProductInfo from '../../components/product-info';

function Product(props) {

    const [product, setProduct] = useState({});
    const [id, setId] = useState(props.match.params.id);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const promise = await fetch('http://localhost:5000/get-products');
        const data = await promise.json();
        const [productInfo] = data.filter(obj => obj._id === id);
        setProduct(productInfo);
    }

    return (
        <div>
            <Header />
            <Menu />
            <div className={styles.container}>
                <ProductImages images={[product.firstImage, product.secondImage]} />
                <ProductInfo
                    brand={product.brand}
                    model={product.model}
                    details={product.details}
                    price={product.price}
                />
                <Link className={styles['add-to-cart']} to="/">ADD TO CART</Link>
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
//                     {/* <ImageHolder images={[product.firstImage, product.secondImage]} /> */}
//                     <div className={styles['pic-holder']}>
//                         <div className={styles['image-holder']}>
//                             <img src={product.firstImage} alt='' />
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


