import React from 'react';
// import styles from './index.module.css';
import Header from '../../components/header';
import Menu from '../../components/navigation';
import Footer from '../../components/footer';
import Products from '../../components/products';
import Banner from '../../components/banner';
import ShoppingInfo from '../../components/shopping-info';

function HomePage({ filter }) {
    return (
        <div>
            <Header />
            <ShoppingInfo />
            <Menu />
            <Banner />
            <Products filter={filter} />
            <Footer />
        </div>
    )
}

export default HomePage