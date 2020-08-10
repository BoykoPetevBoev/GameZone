import React, { Component } from 'react';
// import styles from './index.module.css';
import Table from '../../components/admin-table';
import AdminNavigation from '../../components/admin-navigation';
import { getAllProducts } from '../../utils/requester';

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }
    componentDidMount = async () => {
        const products = await getAllProducts()
        console.log(products);
        this.setState({
            products
        });
    }
    render() {
        const { products } = this.state
        if (products.length === 0) {
            return (
                <div>
                    <AdminNavigation />
                </div>
            )
        }
        return (
            <div>
                <AdminNavigation />
                <Table data={products} />
            </div>
        );
    }
}

export default Products;
