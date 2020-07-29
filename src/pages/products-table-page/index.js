import React, { Component } from 'react';
import styles from './index.module.css';
import Table from '../../components/admin-table';

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }
    componentDidMount = async () => {
        const promise = await fetch('http://localhost:5000/get-products');
        const products = await promise.json();
        this.setState({
            products
        });
    }
    render() {
        const { products } = this.state
        if(products.length == 0){
            return (
                <div></div>
            )
        }
        return (
            <Table data={products} />
        );
    }
}

export default Products;
