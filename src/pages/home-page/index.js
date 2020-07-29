import React from 'react';
// import styles from './index.module.css';
import Header from '../../components/header';
import Menu from '../../components/navigation';
import Footer from '../../components/footer';
import Products from '../../components/products';
import Banner from '../../components/banner';

function HomePage({ filter }) {
    return (
        <div>
            <Header />
            <Menu />
            <Banner />
            <Products filter={filter} />
            <Footer />
        </div>
    )
}

export default HomePage