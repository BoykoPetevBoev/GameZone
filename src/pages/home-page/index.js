import React from 'react';
// import styles from './index.module.css';
import Header from '../../components/header';
import Menu from '../../components/navigation';
import Footer from '../../components/footer';
import Products from '../../components/products';
import Banner from '../../components/banner';

function HomePage() {
    return (
        <div>
            <Header />
            <Menu />
            <Banner />
            <Products />
            <Footer />
        </div>
    )
}

export default HomePage