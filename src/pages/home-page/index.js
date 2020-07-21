import React from 'react';
import styles from './index.module.css';
import Header from '../../components/header';
import Menu from '../../components/navigation';
import Footer from '../../components/footer';

function HomePage() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

export default HomePage