import React, { Component } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';


class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.getProducts();
    }
    async getProducts() {
        const promise = await fetch('http://localhost:5000/get-products');
        const data = await promise.json();
        console.log(data);
        this.setState({
            data
        });
    }
    renderProducts() {
        const { data } = this.state;

        return data.map((product) => {
            return (
                <div key={product._id} className={styles.product}>

                    <div className={styles.category}>
                        <p>{product.category}</p>
                    </div>

                    <div className={styles.image}>
                        <img src={product.firstImage} alt="No Image" />
                    </div>

                    <div className={styles.title}>
                        <p> <b>{product.brand} {product.model}</b></p>
                    </div>
                    <div className={styles.price}>
                        <p>${product.price}</p>
                    </div>

                    <div className={styles.buttons}>
                        <Link className={styles.btnSave} to="/">LEARN MORE</Link>
                    </div>
                </div>
            )
        })

    }
    render() {
        return (
            <div className={styles.container}>
                {this.renderProducts()}
            </div>
        )
    }
}

export default Product
