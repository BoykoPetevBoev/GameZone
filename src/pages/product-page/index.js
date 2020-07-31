import React, { Component } from 'react';
import styles from './index.module.css'
import Header from '../../components/header';
import Menu from '../../components/navigation';
import Footer from '../../components/footer';
import Products from '../../components/products';
import { Link } from 'react-router-dom';

class ProductPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: {},
            id: this.props.match.params.id
        }
    }

    componentDidMount = async () => {
        const { id } = this.state;
        const promise = await fetch('http://localhost:5000/get-products');
        const data = await promise.json();
        const [product] = data.filter(obj => obj._id === id);
        this.setState({
            product
        });
    }

    render() {
        const { product } = this.state;
        return (
            <div>
                <Header />
                <Menu />
                <div className={styles.container}>
                    <div className={styles['pic-holder']}>
                        <div className={styles['image-holder']}>
                            <img src={product.firstImage} />
                        </div>
                        <div className={styles['image-holder']}>
                            <img src={product.secondImage} />
                        </div>
                    </div>
                    <div className={styles['info-holder']}>
                        <p className={styles['product-name']}>{product.brand} {product.model}</p>
                        <p>{product.details}</p>
                        <p className={styles['product-price']}>${product.price}</p>
                        <Link className={styles['add-to-cart']} to="/">ADD TO CART</Link>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default ProductPage;